import Head from 'next/head'
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/Chat.module.css'

export default function Chat() {

  const [history, setHistory] = useState(["Hello, type something"])
  const [currentMessage, setCurrentMessage] = useState("")
  const chatBottom = useRef(null)
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

  useEffect(() => {
    chatBottom.current?.scrollIntoView({ behavior: "smooth" })
  }, [history]);

  return (
    <div className={styles.container}>
      <Head>
        <title>TNA</title>
      </Head>

      <main className={styles.main}>
        <h1>Chat</h1>
        <div className={styles.display}>
          {messageHistory}
          <div ref={chatBottom}></div>
        </div>
        <div className={styles.submitMessage}>
          <input id="inputMessage" type="text" autocomplete="off" value={currentMessage} className={styles.message} onKeyPress={handleKeyPress} onChange={e => setCurrentMessage(e.target.value)}></input>
          <button id="btnSendMessage" className={styles.button} onClick={updateHistory}>SEND</button>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
