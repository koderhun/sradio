import {FC} from 'react'
import Image from 'next/image'
import LogoImage from '@/public/icons/sradio.svg'
import s from './styles.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.left}>
          <a href={process.env.NEXT_PUBLIC_BASE_URL} className={s.logo}>
            <Image src={LogoImage} alt="logo" title="logo" width={40} className={s.image} />
          </a>
        </div>
        <div className={s.right}>
          <nav className={s.nav}>
            <a href="/" className={s.link}>
              Радио
            </a>
            <a href="/about" className={s.link}>
              О нас
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
