import React from 'react';
import './Rest.css'
const Rest = (props) => {

    const { uniqueID, minute, addToRestArea} = props;
    return (
        <div>
            <button onClick={()=> addToRestArea(uniqueID, minute)} className='break-btn'>{minute}m</button>
        </div>
    );
};

export default Rest;