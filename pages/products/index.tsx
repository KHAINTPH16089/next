import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { useAuth } from '../../hooks/auth'
import useProducts from '../../hooks/use-product';

type ProductsProps = {
  products: any[];
}
type product = {
  name: string,
  price: number
}
const Product = () => {
  const {data: products, error, addProduct, remove} = useProducts()
  const {register, handleSubmit, formState: {errors}} = useForm<product>()
  if(error) return <div>false to load</div>
  if(!products) return <div>loading...</div>
  // console.log("product page client");
  // console.log("product", products);
  // if(!products) return null;
  console.log(products);
  
  const onSubmit: SubmitHandler<product> = async (data) =>{
    addProduct(data)
  }
  return (
    <div>
      {products.map((item: any) => (
        <div key={item.id}>
          <Link href={`/products/${item.id}`}>{item.name}</Link> 
          <div>{item.price}</div>

          <Link href={`/products/update/${item.id}`}><button>sửa</button></Link> 

          <button onClick={() => remove(item.id)}>Delete</button>
          
        </div>
      ))}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">price</label>
          <input type="number" {...register("price")} />
        </div>
        <button type='submit'>thêm sản phẩm</button>
      </form>
    </div>
  )

  
}
// export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
//   const data = await (await fetch('http://localhost:3001/products')).json();
//   console.log(data);
  
//   return {
//     props: {
//       products: data
//     }
//   }
// }

export default Product