
"use client"

import {FC, useEffect, useRef, useState} from 'react'
import Image from 'next/image';
import PlayImage from '@/public/icons/play.svg'
import PauseImage from '@/public/icons/pause.svg'
import s from './styles.module.scss'

interface PlayerProps {
  
}

const url = 'https://tatarradio.hostingradio.ru/tatarradio320.mp3'

export const Player: FC<PlayerProps> = ({  }) => {
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
    <div className={s.container}>
     playyer
     <audio src={url} ref={audioRef} />
     <button type="button" className={s.btn} onClick={() => setIsPlaying(!isPlaying)}>
      <Image src={isPlaying ? PauseImage : PlayImage} alt={title} title={title}  width={60} height={60} />
     </button>
    </div>
  )
}
