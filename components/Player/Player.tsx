'use client'

import {FC, useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import PlayImage from '@/public/icons/play.svg'
import PauseImage from '@/public/icons/pause.svg'
import s from './styles.module.scss'

interface PlayerProps {}

const url = 'https://tatarradio.hostingradio.ru/tatarradio320.mp3'

export const Player: FC<PlayerProps> = ({}) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    console.log('fff', audioRef.current)
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  })

  const title = isPlaying ? 'pause' : 'play'

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <audio src={url} ref={audioRef} />
        <h1 className={s.title}>Татар Радиосы Сергач 91.4 FM</h1>
        <div className={s.btnGroup}>
          <button type="button" className={s.btn} onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <Image className={s.pause} src={PauseImage} alt={title} title={title} width={60} height={60} />
            ) : (
              <Image className={s.play} src={PlayImage} alt={title} title={title} width={60} height={60} />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
