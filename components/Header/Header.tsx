import classnames from 'classnames'
import Image from 'next/image'
import type {FC} from 'react'

import {metadata} from '@/Metadata'
import LogoImage from '@/public/pictures/logo.svg'

import s from './styles.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
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
            <a href="/" className={s.link}>
              Радио
            </a>
            <a href="/About" className={s.link}>
              О нас
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
