import clsx from 'clsx'
import { List } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'
import { Loading } from '../../../../components/Loading'
import styles from './styles.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant: 'primary' | 'secondary' | 'tertiary'
  isInteractive?: boolean
  isLoading?: boolean
}

export function Button({ title, variant = 'primary', isInteractive = false, isLoading = false, ...rest }: Props) {
  return (
    <button
      className={clsx(styles.container, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.tertiary]: variant === 'tertiary',
        [styles.interactive]: isInteractive,
        [styles.loading]: isLoading,
      })}
      {...rest}
    >
      {isLoading && <Loading />}
      {isInteractive && <List size={20} color="#FFF" />}
      {title}
    </button >
  )
}