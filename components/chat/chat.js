import { useEffect, useRef, useReducer } from 'react';
import styles from './chat.module.css'
import bot from '../../lib/botApi'

const reducer = (state, action) => {
  switch (action.type) {
    case 'messageUpdated':
      return { ...state, currentMessage: action.message }
    case 'messageSubmitted':
      return { ...state, history: [...state.history, action.message], currentMessage: "" }
    case 'botResponseArrived':
      return { ...state, history: [...state.history, action.response]}
  }
}

export default function Chat() {

  const [state, dispatch] = useReducer(reducer, { history: ["Hello, type something here!"], currentMessage: "" })
  const chatBottom = useRef(null)
  const messageHistory = state.history.map((msg, index) => <p key={index} className={index % 2 == 0 ? styles.userMessage : styles.botResponse}>{msg}</p>)

  const submitMessage = async () => {
    dispatch({ type: 'messageSubmitted', message: state.currentMessage })
    const answer = await bot.submmitMessage(state.currentMessage)
    dispatch({ type: 'botResponseArrived', response: answer })
  }

  const submitMessageOnEnter = (event) => event.key === "Enter" && submitMessage()

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
        <input className={styles.inputMessage} type="text" autoComplete="off" value={state.currentMessage} onKeyPress={submitMessageOnEnter} onChange={e => dispatch({ type: 'messageUpdated', message: e.target.value })} ></input>
        <button className={styles.btnSendMessage} onClick={submitMessage}>SEND <i className={styles.sendIcon}></i></button>
      </div>
    </div>
  )
}