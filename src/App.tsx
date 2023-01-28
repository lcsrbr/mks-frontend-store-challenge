import React, { useEffect, useState } from 'react';
function App() {

  const [teste, setTeste] = useState([]) as any

  async function API() {
    const URL = await "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
    const APIResponse = await fetch(URL);
    const { products } = await APIResponse.json();
    setTeste(products as any)
}

  useEffect(() => {
    API()
  },[])


  useEffect(() => {
    console.log(teste);
  },[teste])


  return (
      <div>
        {teste.map((product: any) => {
          return (
            <div key={product.id}>
              <p>{product.brand}</p>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.img} alt={product.name} />
            </div>
          )
        })}
      </div>
  );
}

export default App;
