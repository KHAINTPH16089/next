import React from 'react'
import useSWR from 'swr'
import { add } from '../api/products';


const useProducts = () => {
  const {data, error, mutate} = useSWR("/products");

  const addProduct = async (item: any) => {
    const product = await add(item)
    mutate([...data, product])
  }

  const remove = async (id: any) => {
    const product = await remove(id)
    const newProduct = data.filter((item: any) => item.id != id)
    mutate([newProduct])
  }

  return{
    data,
    error,
    addProduct,
    remove
  }
}

export default useProducts