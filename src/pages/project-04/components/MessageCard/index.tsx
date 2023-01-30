import clsx from 'clsx'
import dayjs from 'dayjs'
import styles from './styles.module.scss'

interface Props {
  name: string
  time: Date
  message: string
  isReceived?: boolean
}

export function MessageCard({ name, time, message, isReceived: isReceived }: Props) {
  return (
    <div className={clsx(styles.container, {
      [styles.received]: isReceived
    })}>
      <p className={styles.user}>{name} - {dayjs(time).format('H:mm')}</p>
      <div className={clsx(styles.messageWrapper, {
        [styles.receivedMessage]: isReceived
      })}>
        <p>
          {message}
        </p>
      </div>
    </div>
  )
}