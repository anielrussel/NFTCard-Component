import React from 'react'
import './card.css'
import nft from '../images/image-equilibrium.jpg'
import eth from '../images/icon-ethereum.svg'
import clock from '../images/icon-clock.svg'
import avatar from '../images/image-avatar.png'
import view from '../images/icon-view.svg'

const Card = () => {
  return (
    <div className='nft-card'>
        <div className='nft-image'>
            <img src={nft} alt='' />
        </div>
        <div className='view'>
        <img src={view} alt='' />
        </div>
        <div className='nft-container'>
            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>
            <div className='nft-details'>
                <div className='eth'>
                    <img src={eth} alt='' />
                    <h3>0.041 ETH</h3>    
                </div>
                <div className='clock'>
                    <img src={clock} alt='' />
                    <p>3 days left</p>
                </div>
            </div>
            <hr className='divider'>
            </hr>
            <div className='nft-avatar'>
            <img src={avatar} alt='' />
            <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </div>
    </div>
  )
}

export default Card