import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className=' bg-red-400 flex '>
            <li><Link href="/">trang chủ</Link></li>
            <li><Link href="/products">product</Link></li>
            <li><Link href="/products/1">product Detail</Link></li>
        </ul>
    </div>
  )
}

export default Header