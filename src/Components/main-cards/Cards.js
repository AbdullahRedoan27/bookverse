import React from 'react';
import './Cards.css'

const Cards = (props) => {
    const {image, name, description, time} = props.book
    return (
        <div className='card-container'>
            <img src={image} alt='' />
            <div className="card-texts">
                <h2>Name: {name}</h2>
                <p>Description: {description}</p>
                <h5>Time: { time}</h5>
            </div>
            <div className='btns'>
                <button className='btn-add'>Add</button>
            </div>
        </div>
    );
};

export default Cards;