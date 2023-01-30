import IProducts from "../interfaces/IProducts";

export default async function API(): Promise<IProducts[]> {
    const URL = await "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC"
    const APIResponse = await fetch(URL);
    const { products } = await APIResponse.json();
    return products
  }
