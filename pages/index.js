import Head from 'next/head'
import Chat from '../components/chat/chat'
import styles from './index.module.css'

export default () => (
  <div className={styles.container}>
    <Head>
      <title>TNA</title>
    </Head>
    <main className={styles.main}>
      <Chat></Chat>
    </main>
    <footer className={styles.footer}>
      <p> By <span><a href="https://github.com/fernando-alves">Fernando Alves</a></span> and <span><a href="https://github.com/nathaliaitaliano">Nathalia Italiano</a></span> 🤍</p>
    </footer>
  </div>
)