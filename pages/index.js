import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Chat.module.css'

export default function Chat() {

  const [history, setHistory] = useState(["Hello, type something"])
  const [currentMessage, setCurrentMessage] = useState("")
  const messageHistory = history.map((msg, index) => <p key={index} className={index % 2 == 0 ? styles.leftMessage : styles.rightMessage}>{msg}</p>)

  const updateHistory = () => {
    setHistory([...history, currentMessage])
    setCurrentMessage("")
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TNA Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Chat</h1>
        <div className={styles.display}>
          {messageHistory}
        </div>
        <div className={styles.submitMessage}>
          <input type="text" value={currentMessage} className={styles.message} onChange={e => setCurrentMessage(e.target.value)}></input>
          <button className={styles.button} onClick={updateHistory}>SEND</button>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
