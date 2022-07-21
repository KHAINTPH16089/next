import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useProducts from '../../../hooks/use-product';

type productProps = {
    product: any;
}
type product = {
  name: string,
  price: number
}
const UpdateProducts = (props: productProps) => {
    const {data: products, error, update} = useProducts()
    if(error) return <div>false to load</div>
    if(!products) return <div>loading...</div>
    const {register, handleSubmit, formState: {errors}, reset} = useForm<product>()
    const hienThi = () => {
      reset(props.product)
    }
    hienThi()
    const onSubmit: SubmitHandler<product> = async (data) =>{
      update(props.product.id, data)
    }
  return (
    <div>
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
export default UpdateProducts