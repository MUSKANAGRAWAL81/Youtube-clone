import { Avatar } from '@mui/material'
import React from 'react'
import './VedioCard.css';

function VedioCard( {image ,title, channel , timestamp, views , channelImage}) {
    return (
        <div className='vediocard'>
            <img className='vediocard_thumbnail' src= {image} alt='' />
            <div className='vediocard_info'>
              <Avatar className='vidiocard_avatar' alt={channel} src={channelImage} />
               <div className='vediocard_text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views}.{timestamp}
                </p>

               </div>
            </div>

        </div>
    )
}

export default VedioCard
