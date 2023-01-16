import { CaretDoubleLeft, CaretDoubleRight, Pause, Play } from "phosphor-react";
import { useState } from "react";
import styles from './player-medium.module.scss';

export function PlayerMedium() {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleTogglePlay() {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapperSongInfo}>
        <img src="/rei_sem_nome_meruem.jpg" alt="" />
        <div className={styles.songInfo}>
          <p className={styles.title}>Rei Sem Nome | Meruem</p>
          <span className={styles.author}>Enygma</span>
        </div>
      </div>

      <div className={styles.wrapperControllerPlayer}>
        <button><CaretDoubleLeft weight='fill' size={28} color='#FFF' /></button>
        <button onClick={handleTogglePlay} >{isPlaying ? <Pause weight='fill' size={28} color='#FFF' /> : <Play weight='fill' size={28} color='#FFF' />}</button>
        <button><CaretDoubleRight weight='fill' size={28} color='#FFF' /></button>
      </div>

      <div className={styles.wrapperControllerTime}>
        <div className={styles.progressBar}></div>
        <div className={styles.wrapperTimeInfo}>
          <span>00:00</span>
          <span>06:25</span>
        </div>
      </div>
    </div>
  )
}