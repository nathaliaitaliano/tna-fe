import Head from 'next/head'
import styles from '../styles/Chat.module.css'

export default function Chat() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TNA Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Chat</h1>
        <div className={styles.display}></div>
        <div className={styles.submitMessage}>
          <input type="text" className={styles.message}></input>
          <button className={styles.button}>SEND</button>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
