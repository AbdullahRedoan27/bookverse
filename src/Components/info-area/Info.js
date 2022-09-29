import React, { useEffect, useState } from 'react';
import user from '../../images/student-4.png'
import '../info-area/Info.css'
import Rest from '../rest-Buttons/Rest';

const Info = (props) => {
    const { carts } = props;
    let reqTime = 0;
    for (const cart of carts) {
        reqTime = reqTime + parseFloat(cart.time)
    }

    const [rests , setrests] = useState([])
    const [times, settimes] = useState([])
    useEffect(() => {
        fetch('restTimes.json')
        .then(res => res.json())
        .then(data => setrests(data))
    },[])

    const addToRestArea = (id, time) => {
        const quantity = localStorage.getItem(id);
        const newtimes = [...times, time];
        settimes(newtimes)
        if (quantity) {
            const newQuantity = parseFloat(quantity) + parseFloat(time);
            localStorage.setItem(id, newQuantity);
        }
        else {
            localStorage.setItem(id, time)
        }

    }

    return (
        <div className='info-bar'>
            <div className='user-profile'>

                <img className='user-img' src={user} alt='' />

                <div className='user-info'>
                    <p><b>Yakub Ali</b></p>
                    <p>Toronto, Canada</p>
                </div>
            </div>
            <div className='break-container'>
                <h4 className='info-h4'>Add a break</h4>
                <div className='breaks'>
                    {
                        rests.map(rest => <Rest
                            key={rest.uniqueID}
                            uniqueID={rest.uniqueID}
                            minute={rest.minute}
                            addToRestArea={addToRestArea}>
                            
                            </Rest>)
                    }
                </div>
            </div>
            <div className='reading-info'>
                <h4 className='info-h4'>Reading Details</h4>
                <div>
                    <div className='time-count-div'>
                    <p>Reading time</p>    
                    <p><span>{reqTime}</span> hrs</p>    
                    </div>
                    <div className='time-count-div'>
                    <p>Rest time</p>    
                        <p><span>{times}</span></p>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;