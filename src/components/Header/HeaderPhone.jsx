import React from 'react'
import Navcontent from './Navcontent'

const HeaderPhone = ({menuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen} "navPhoneComes:""`}>
        <Navcontent/>
    </div>
  )
}

export default HeaderPhone