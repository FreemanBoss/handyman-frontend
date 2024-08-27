import React from 'react'
import craftsmen from '../../images/craftsmen.jpg'
import './craftsman.css'

const craftsman = () => {
  return (
    <div className='craftsman'>
        <div className='caption'>
            <p>Are you a cleaner? Can You assemble furniture?
                Are you a plumber? There is a place for you 
                at HandyMan. Join us now and start earning.
            </p>
        </div>

        <div className='image'>
        <img src={craftsmen} alt='' />
        </div>
    </div>
  )
}

export default craftsman
