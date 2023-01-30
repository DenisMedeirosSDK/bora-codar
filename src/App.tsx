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
          <CardPreviewChallenge name='Botões e cursores' path='/projeto-03' description='Criar uma variação de botões' thumbnail='thumbnail_challenge_03.png' />
          <CardPreviewChallenge name='Criação de um chat' path='/projeto-04' description='Criar o design de um chat' thumbnail='thumbnail_challenge_04.png' />
        </div>
      </section>
    </div>
  )
}

export default App
