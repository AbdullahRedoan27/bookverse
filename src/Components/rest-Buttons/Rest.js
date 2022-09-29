import React from 'react';
import './Rest.css'
const Rest = (props) => {
    console.log(props);
    const { uniqueID, minute } = props;
    return (
        <div>
            <button className='break-btn'>{minute}m</button>
        </div>
    );
};

export default Rest;