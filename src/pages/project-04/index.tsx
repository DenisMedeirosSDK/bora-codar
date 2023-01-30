import { PaperPlaneRight } from 'phosphor-react'
import { MessageCard } from './components/MessageCard'
import { UserCard } from './components/UserCard'
import styles from './styles.module.scss'

export function Project04() {
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>
        <div>
          <UserCard />
          <div className={styles.timeTodayWrapper}>
            <span className={styles.time}>Hoje 13:30h</span>
          </div>

          <section className={styles.chatWrapper}>
            <div className={styles.chat}>
              <MessageCard name='Denis' time={new Date()} message='Eae' isReceived />
              <MessageCard name='Denis' time={new Date()} message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            </div>

            <form className={styles.form}>
              <input type="text" placeholder='Digite sua mensagem' />
              <button type='submit' title='Enviar' className={styles.sendMessage}>
                <PaperPlaneRight size={24} weight="fill" color='#FFF' />
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}