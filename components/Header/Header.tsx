import Image from 'next/image'

import classnames from 'classnames'
import type {FC} from 'react'
import Link from 'next/link'

import {metadata} from '@/Metadata'
import LogoImage from '@/public/pictures/logo.svg'

import s from './styles.module.scss'

export const Header: FC = () => {
  console.log('NEXT_PUBLIC_URL', process.env.NEXT_PUBLIC_URL)
  return (
    <header className={s.header}>
      <div className={classnames(s.container, 'container')}>
        <div className={s.left}>
          <a href={process.env.NEXT_PUBLIC_URL} className={s.logo}>
            <Image
              src={LogoImage}
              alt={metadata.logoTitle}
              title={metadata.logoTitle}
              width={40}
            />
          </a>
        </div>
        <div className={s.right}>
          <nav className={s.nav}>
            <Link href="/" className={s.link}>
              Радио
            </Link>
            <a href="/About" className={s.link}>
              О нас
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
