import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import SendInput from './SendInput'

const ChatContainer = () => {
  return (
    <div className='w-[75%] bg-slate-400 '>
      <ChatUser/>
      <div className='' style={{maxHeight: "calc(92vh-8vh)"}}>
      <Messages/>
      </div>
      <SendInput/>
    </div>
  )
}

export default ChatContainer
