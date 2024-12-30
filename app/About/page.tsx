import type {FC} from 'react'

import s from './styles.module.scss'

const About: FC = () => {
  return (
    <div className={s.content}>
      <h1>О нас</h1>

      <p>Проект создан в учебных целях, для самостоятельного изучения React.</p>
      <p>
        Ссылка на источник радио находится здесь{' '}
        <a href="https://top-radio.ru/sergach/tatar-radiosyi" target="_blank">
          https://top-radio.ru/sergach/tatar-radiosyi
        </a>
      </p>
    </div>
  )
}

export default About
