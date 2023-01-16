import styles from './App.module.scss'
import { CardPreviewChallenge } from './components/card-preview-challenge'

function App() {
  return (
    <div className={styles.container}>
      <h1>
        Desafios do #BoraCodar
      </h1>

      <section>
        <div className={styles.gridChallenge}>
          <CardPreviewChallenge name='Player Music' path='/projeto-01' description='Criar um player de musica' thumbnail='thumbnail_challenge_01.png' />
          <CardPreviewChallenge name='Card de produto' path='/projeto-02' description='Criar uma apresentação de produto' thumbnail='thumbnail_challenge_02.png' />
        </div>
      </section>
    </div>
  )
}

export default App
