import { data } from 'autoprefixer';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import LayoutAdmin from '../../component/Layout/admin';

type productProps = {
  product: any;
}

const Detail = ({product}: productProps) => {
  return (
    <div>{product.name}</div>
  )
}

export const getStaticPaths: GetStaticPaths<productProps> = async () => {
  const data = await (await fetch(`http://localhost:3001/products`)).json();
  const id = data.map((item: any)=> {
    return {
      params: {id: item.id}
    }
  })
  return {
    paths: id,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<productProps> = async (context: GetStaticPropsContext) => {
  const data = await (await fetch(`http://localhost:3001/products/${context.params?.id}`)).json();
  return {
    props: {
      product: data
    }
  }
}

Detail.layout = LayoutAdmin
export default Detail