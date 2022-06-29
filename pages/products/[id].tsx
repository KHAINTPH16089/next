import { GetStaticPathsContext, GetStaticProps } from 'next'
import React from 'react'

type productProps = {
  product: any;
}

const Detail = ({product}: productProps) => {
  return (
    <div>Detail</div>
  )
}

export const getStaticProps: GetStaticProps<productProps> = async (context: GetStaticPathsContext) => {
  return {
    props: {
      product: {}
    }
  }
}
export default Detail