import React from 'react'
import './vedioRow.css';

function VedioRow( {veiws ,subs ,description ,timestamp , channel , title ,image }) {
    return (
        <div className='vedioRow'>
            <img src= {image} alt='' />
            <div className='vedioRow_text'>
                <h3> {title}</h3>
                <p className='vedioRow_headlines'>
                    {channel} .{" "}
                    <span className='vedioRow_subs'>
                    <span className= "vedioRow_spam"> {subs} subscribers </span> 
                 
                   
                    </span>  {" "}
                    {veiws} Views . {timestamp} Timestamp
                   </p>
                <p  className = "vedioRow_description"> {description}</p>
            </div>

        </div>
    )
}

export default VedioRow
