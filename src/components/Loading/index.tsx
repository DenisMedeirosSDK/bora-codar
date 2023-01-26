import { CircleNotch } from "phosphor-react";
import './styles.module.scss';
import styles from './styles.module.scss';

export function Loading() {
  return (
    <CircleNotch size={20} color="#FFF" className={styles.spinLoading} />
  )
}