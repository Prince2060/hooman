import React from 'react'
import './Navbar.css'
import { GiCondorEmblem } from 'react-icons/gi';
function Navbar() {
  return (
    <div className='wholecontainer'>
    <div className='hoonavbar'>
      <div className='left'>
        <div className='bankicon'>
        < GiCondorEmblem />
        </div>
      <div className='hoo'>Hoo</div>
      <div className='bank'>Bank</div>
      </div>
      <div className='right'>
<div className='about'>About</div>
<div className='about'>Features</div>
<div className='about'>Product</div>
<div className='about'>Clients</div>
      </div>
    </div>
    </div>
  )
}

export default Navbar