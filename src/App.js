import React, { useState } from 'react';
import useWebSocket from 'react-use-websocket';



const WS_URL = 'ws:/localhost:8080'


const App = () => {
  const [message , setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  const { sendMessage , lastMessage } = useWebSocket(WS_URL , {
    onMessage : (event) => {
      setMessage(prev => [...prev , event.data])
    }
  })


  const handelSend = () => {
    sendMessage(message);
    setMessage('');


  }

  return(
    <div>
      <h2> Broadcast Chat</h2>
      <div>
        {messages.map((msg , index) => (
            <p key = {index}>{msg}</p>
        ))}
      </div>
      <input
      type='text'
      value = {message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder='Type a Message...'
      />
      <button onClick={handelSend}>Send</button>
    </div>
  )


}

export default App;