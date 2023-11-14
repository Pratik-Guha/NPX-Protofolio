import React from 'react'
import Navcontent from './Navcontent'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({menuOpen,setmenuOpen}) => {
  return (
    <nav >
      <Navcontent/>
      <button onClick={()=>setmenuOpen(true)}>
        <AiOutlineMenu/>
      </button>
    </nav>
  )
}

export default Header