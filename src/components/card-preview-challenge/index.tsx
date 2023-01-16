import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

interface Props {
  thumbnail: string
  name: string
  description: string
  path: string
}

export function CardPreviewChallenge({ thumbnail, name, description, path }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperImg}>
        <img src={`/${thumbnail}`} alt={name} />
      </div>

      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <p className={styles.description}>{description}</p>
        <Link to={path} className={styles.challenge}>Ver desafio</Link>
      </div>
    </div>
  )
}