import React from 'react'
import User from './User'

const Users = () => {
  return (
    <div className='px-8 py-2 text-white font-semibold bg-slate-800 '>
      <h1>Messages</h1>
    <div className='overflow-y-auto' style={{maxHeight: "calc(92vh)"}}>
    <User/>
    <User/>
    <User/>

    </div>
    </div>
  )
}

export default Users
