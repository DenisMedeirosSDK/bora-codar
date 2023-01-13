import { useState } from 'react'
import styles from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <h1>
        Desafios do #BoraCodar
      </h1>
    </div>
  )
}

export default App
