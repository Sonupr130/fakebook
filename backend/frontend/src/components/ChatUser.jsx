import React from 'react'

const ChatUser = () => {
  return (
    <div className='flex space-x-3 items-center justify-center bg-slate-950 text-white'>
      <div className="avatar avatar-online">
  <div className="w-16 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div>
    <h1 className='text-xl'>Sneha</h1>
    <p className='text-sm'>Offline</p>
</div>
    </div>
  )
}

export default ChatUser
