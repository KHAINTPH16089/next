import Link from 'next/link'
import React from 'react'
import style from './header.module.scss'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className={style.header}>
            <li className={style['header__menu']}><Link href="/"> trang chủ</Link></li>
            <li className={style['header__menu']}><Link href="/products">product</Link></li>
            <li className={style['header__menu']}><Link href="/products/1">product Detail</Link></li>
        </ul>
    </div>
  )
}

export default Header