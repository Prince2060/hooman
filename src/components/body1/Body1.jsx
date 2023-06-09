import React from 'react'
import './Body1.css'
import { RxMagicWand } from 'react-icons/rx';
import { BsArrowThroughHeartFill } from 'react-icons/bs';
function Body1() {
  return (
    <div className='leftside'>
      <div className='discountbox'>
        <div className='magicanddiscount'>
          <div className='magic'>
            <RxMagicWand />
          </div>
          <div className='discounttext'>20% Discount For 1 Month Account</div>
        </div>
      </div>
      <div className='nextgenandcircle'>
        <div className='nextandgen'>
          <div className='thenext'>The Next</div>
          <div className='generation'>Generation</div>
        </div>
        <div className='circle'>
          <div className='getandstarted'>
            <div className='getandicon'>
              <div className='get'>Get</div>
              <BsArrowThroughHeartFill />
            </div>
            <div className='started'>Started</div>
          </div>
        </div>
      </div>
      <div className='thenext'>Payment Method.</div>
      <div className='lorems'>Our team of experts uses a methodology to identify the credit cards most likely to fit yourneeds.We examine annual percentage rates,annual fees.a methodology to identify the credit cards most likely to fit yourneeds.We examine annual percentage rates,annual fees.identify the credit cards most likely to fit  cards most likely to fitannual percentage </div>
    </div>
  )
}

export default Body1