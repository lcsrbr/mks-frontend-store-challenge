import React,  {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';

function Header() {
    const [total, setTotal] = useState('0.00')
    const checkoutProducts = useSelector(({ products }: RootState) => products.checkout)

    const getTotal = () => {
        const result = checkoutProducts.reduce((total, product) => total + Number(product.price), 0)
        setTotal(result.toFixed(2))
    }

    useEffect(() => {
        getTotal()
    })

  return (
    <div>{total}</div>
  )
}

export default Header