import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import React from 'react'

type ProductsProps = {
  products: any[];
}

const Product = ({ products }: ProductsProps) => {
  console.log("product page client");
  console.log("product", products);
  if(!products) return null;
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link> </div>
      ))}
    </div>
  )

  
}
export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
  const data = await (await fetch('http://localhost:3001/products')).json();
  console.log(data);
  
  return {
    props: {
      products: data
    }
  }
}

export default Product