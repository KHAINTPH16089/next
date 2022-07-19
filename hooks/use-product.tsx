import React from 'react'
import useSWR from 'swr'
import { add, getProduct, removeProduct, updateProduct } from '../api/products';


const useProducts = () => {
  const {data, error, mutate} = useSWR("/products");

  const addProduct = async (item: any) => {
    const product = await add(item)
    mutate([...data, product])
  }

  const remove = async (id: any) => {
    await removeProduct(id)
    const newProduct = data.filter((item: any) => item.id != id)
    mutate(newProduct)
  }

  const get = async (id: any) => {
    const product = await getProduct(id)
    mutate(product)
  }

  const update = async (id:any,item: any) => {
    const product = await updateProduct(id, item)
    mutate(product)
  }

  return{
    data,
    error,
    addProduct,
    remove,
    get,
    update
  }
}

export default useProducts