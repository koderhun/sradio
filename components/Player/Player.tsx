'use client'

import Image from 'next/image'

import {useEffect, useRef, useState} from 'react'
import type {FC} from 'react'

import {metatext} from '@/Metadata'
import SpinImage from '@/public/pictures/spinning.svg'

import s from './styles.module.scss'

const url = 'https://tatarradio.hostingradio.ru/tatarradio320.mp3'

export const Player: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isWaiting, setIsWaiting] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  const canPlayHandler = () => {
    setIsLoading(false)
  }

  const waitingHandler = () => {
    setIsWaiting(true)
  }

  const title = isPlaying ? 'pause' : 'play'

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <audio
          onCanPlayThrough={canPlayHandler}
          onWaiting={waitingHandler}
          className={s.audioTag}
          controls
          preload="auto"
          src={url}
          ref={audioRef}
        />
        <div className={s.loader}>
          {isWaiting && !isLoading && (
            <div className={s.waiting}>Не удалось загрузить аудио</div>
          )}

          {isLoading && (
            <Image
              className={s.loaderImage}
              src={SpinImage}
              alt="Loading"
              title="Loading"
              width={60}
              height={60}
            />
          )}
        </div>
        <h1 className={s.title}>{metatext.title}</h1>
        <div className={s.btnGroup}>
          <button
            className={[s.btn, isPlaying ? s.btnPause : s.btnPlay].join(' ')}
            type="button"
            role={title}
            title={title}
            disabled={isLoading}
            onClick={() => setIsPlaying(!isPlaying)}
          ></button>
        </div>
      </div>
    </div>
  )
}
