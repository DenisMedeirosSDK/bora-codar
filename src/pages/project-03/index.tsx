import { useState } from "react";
import { Button } from "./components/button";

import styles from './styles.module.scss';

export function Project03() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleTestButtonLoading() {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img src="/challenge-03.png" alt="Mostrando os botões" />
      </main>
      <aside className={styles.aside}>
        <p className={styles.title}>Teste os botões</p>
        <span className={styles.description}>Interaja com os botões e observe a mudança de aparência e de cursores</span>
        <Button title="INTERAJA COMIGO" variant="primary" type="submit" isLoading={isLoading} onClick={handleTestButtonLoading} />
        <Button title="INTERAJA COMIGO" variant="secondary" type="button" isInteractive />
        <Button title="INTERAJA COMIGO" variant="tertiary" type="button" disabled />
      </aside>
    </div>
  )
}