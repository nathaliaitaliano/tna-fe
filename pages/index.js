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
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
