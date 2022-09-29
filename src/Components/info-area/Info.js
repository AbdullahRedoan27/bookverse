import React from 'react';
import user from '../../images/student-4.png'
import '../info-area/Info.css'

const Info = (props) => {
    console.log(props);
   
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
                    <button className='break-btn'>10m</button>
                    <button className='break-btn'>20m</button>
                    <button className='break-btn'>30m</button>
                    <button className='break-btn'>45m</button>
                    <button className='break-btn-h'>1h</button>
                </div>
            </div>
            <div className='reading-info'>
                <h4 className='info-h4'>Reading Details</h4>
                <div>
                    <div className='time-count-div'>
                    <p>Reading time</p>    
                    <p><span>00</span> hrs</p>    
                    </div>
                    <div className='time-count-div'>
                    <p>Reading time</p>    
                    <p>Reading</p>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;