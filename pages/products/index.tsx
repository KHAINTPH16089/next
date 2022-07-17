import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react'
import useSWR from 'swr';
import { useAuth } from '../../hooks/auth'

type ProductsProps = {
  products: any[];
}

const Product = () => {
  const {data, error, register} = useAuth()
  if(error) return <div>false to load</div>
  if(!data) return <div>loading...</div>
  // console.log("product page client");
  // console.log("product", products);
  // if(!products) return null;
  return (
    <div>
      {/* {products.map((item) => (
        <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link> </div>
      ))} */}
      {data.map((user:any,index:any) => <div key={index}>{user.email}</div>)}
      <button onClick={() => register()}>Register</button>
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