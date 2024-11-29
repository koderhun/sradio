'use client'

import {FC, useEffect, useRef, useState} from 'react'
import {metatext} from '@/Metadata'
import Image from 'next/image'
import PlayImage from '@/public/icons/play.svg'
import PauseImage from '@/public/icons/pause.svg'
import SpinImage from '@/public/spinning.svg'
import s from './styles.module.scss'

interface PlayerProps {}

const url = 'https://tatarradio.hostingradio.ru/tatarradio320.mp3'

export const Player: FC<PlayerProps> = ({}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    const audioProgress = () => {
      setIsLoading(false)
    }
    audioRef.current?.addEventListener('loadeddata', audioProgress)

    return () => {
      audioRef.current?.removeEventListener('loadeddata', audioProgress)
    }
  }, [audioRef])

  const title = isPlaying ? 'pause' : 'play'

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <audio className={s.audioTag} controls preload='auto' src={url} ref={audioRef} />
        <h1 className={s.title}>{metatext.title}</h1>
        <div className={s.btnGroup}>
          {isLoading ? (
            <div className={s.loader}>
              <Image className={s.pause} src={SpinImage} alt='Loading' title='Loading' width={60} height={60} />
            </div>
          ) : (
            <button type="button" className={s.btn} onClick={() => setIsPlaying     (!isPlaying)}>
              {isPlaying ? (
                <Image className={s.pause} src={PauseImage} alt={title} title={title} width={60} height={60} />
              ) : (
                <Image className={s.play} src={PlayImage} alt={title} title={title} width={60} height={60} />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
