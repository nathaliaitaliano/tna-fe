import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Chat.module.css'

export default function Chat() {

  const [history, setHistory] = useState(["Hello, type something"])
  const [currentMessage, setCurrentMessage] = useState("")
  const messageHistory = history.map((msg, index) => <p key={index} className={index % 2 == 0 ? styles.userMessage : styles.botResponse}>{msg}</p>)

  const updateHistory = () => {
    setHistory([...history, currentMessage])
    setCurrentMessage("")
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      updateHistory();
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>TNA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Chat</h1>
        <div className={styles.display}>
          {messageHistory}
        </div>
        <div className={styles.submitMessage}>
          <input id="inputMessage" type="text" value={currentMessage} className={styles.message} onKeyPress={handleKeyPress} onChange={e => setCurrentMessage(e.target.value)}></input>
          <button id="btnSendMessage" className={styles.button} onClick={updateHistory}>SEND</button>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
