import {  Verified } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import './channelRow.css';

function ChannelRow( {image , description , noOfVedios ,subs ,channel ,verified }) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow_logo' alt={channel} src={image} />
            <div className='channelRow_text'>
                <h4> {channel} {verified && <Verified />}</h4>
                <p> {subs} subscribers . {noOfVedios} vedios</p>
                <p> {description}</p>
                
            </div>
        </div>
    )
}

export default ChannelRow
