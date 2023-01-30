import { X } from "phosphor-react";

import styles from './styles.module.scss';
export function UserCard() {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img src="https://www.github.com/DenisMedeirosSDK.png" alt="" />
        <div>
          <p className={styles.name}>Denis Medeiros</p>
          <span className={styles.status}>Online</span>
        </div>
      </div>

      <button className={styles.close} type="button" title="Fechar">
        <X size={20} color="#FFF" />
      </button>
    </div>
  )
}