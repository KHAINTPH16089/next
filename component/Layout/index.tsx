import React from 'react'
import { LayoutProps } from '../../models/layout';
import Footer from '../footer';
import Header from '../header';


const Layout = ({children}: LayoutProps) => {
  return (
    <>
        <div><Header /></div>
        <div>{children}</div>
        <div><Footer /></div>
    </>
    
  )
}

export default Layout