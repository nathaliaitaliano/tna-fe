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
        <div className={styles.display}>
          {messageHistory}
          <div ref={chatBottom}></div>
        </div>
        <div className={styles.submitMessage}>
          <input className={styles.inputMessage} type="text" autoComplete="off" value={currentMessage} onKeyPress={handleKeyPress} onChange={e => setCurrentMessage(e.target.value)}></input>
          <button className={styles.btnSendMessage} onClick={updateHistory}>SEND</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> By <span><a href="https://github.com/fernando-alves">Fernando Alves</a></span> and <span><a href="https://github.com/nathaliaitaliano">Nathalia Italiano</a></span> 🤍</p>
      </footer>
    </div>
  )
}