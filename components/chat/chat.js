
import { useEffect, useState, useRef, useReducer } from 'react';
import styles from './chat.module.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'messageSubmitted':
      return { history: [...state.history, action.message] }
  }
}

export default function Chat() {

  const [state, dispatch] = useReducer(reducer, { history: ["Hello, type something here!"] })

  const [currentMessage, setCurrentMessage] = useState("")
  const chatBottom = useRef(null)
  const messageHistory = state.history.map((msg, index) => <p key={index} className={index % 2 == 0 ? styles.userMessage : styles.botResponse}>{msg}</p>)

  const submitMessage = () => {
    dispatch({ type: 'messageSubmitted', message: currentMessage })
    setCurrentMessage("")
  }

  const handleKeyPress = (event) => event.key === "Enter" && submitMessage()

  useEffect(() => {
    chatBottom.current?.scrollIntoView({ behavior: "smooth" })
  }, [state.history]);

  return (
    <div className={styles.chatBot}>
      <div className={styles.display}>
        {messageHistory}
        <div ref={chatBottom}></div>
      </div>
      <div className={styles.submitMessage}>
        <input className={styles.inputMessage} type="text" autoComplete="off" value={currentMessage} onKeyPress={handleKeyPress} onChange={e => setCurrentMessage(e.target.value)}></input>
        <button className={styles.btnSendMessage} onClick={submitMessage}>SEND <i className={styles.sendIcon}></i></button>
      </div>
    </div>
  )
}