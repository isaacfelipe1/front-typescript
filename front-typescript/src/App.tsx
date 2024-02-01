import { useState,useEffect } from 'react'
import api from './services/api'

function App() {
  const [products, setProducts] = useState<IProducts[]>([])
  enum States{
    MG="Minas Gerais",
    SP="São Paulo"
  }
  interface IAddress{
      street:string;
      number:number;
      state:States;
  }
  interface IProducts{
      id:number;
      name:string;
      price:number;
      description?:string;
      address:IAddress;
  }

  useEffect(()=>{
    async function getProducts() {
      const response= await api.get<IProducts[]>('./produtos')
      setProducts(response.data)
    }
    getProducts()

  },[])

  return (
    <div>
      {products.map(products => (
      <div key={products.id}>
        <p>{products.name}</p>
        <p>{products.price}</p>
      </div>
    ))}

    </div> 
  )
}

export default App
