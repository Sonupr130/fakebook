import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const LeftSidebar = () => {
  return (
    <div className='w-[25%] bg-slate-700'>
      <Search/>
      <Users/>
      <Logout/>
    </div>
  )
}

export default LeftSidebar
