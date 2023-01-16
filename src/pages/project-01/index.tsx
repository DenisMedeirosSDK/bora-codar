import { PlayerMusic } from './components/player-music'
import styles from './styles.module.scss'

export function Project01() {
  return (
    <div className={styles.container}>
      <PlayerMusic playerSize='full' />
      <div className={styles.sideWrapper}>
        <PlayerMusic playerSize='medium' />
        <PlayerMusic playerSize='small' />
      </div>

    </div>
  )
}