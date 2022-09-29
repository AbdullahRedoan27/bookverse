import React from 'react';
import './Cards.css'

const Cards = (props) => {
    const { book, btnHandler } = props;
    const { image, name, description, time } = book;
    return (
        <div className='card-container'>
            <img src={image} alt='' />
            <div className="card-texts">
                <h3><b>{name}</b></h3>
                <p>{description}</p>
                <h5>Approximate Time: {time}h</h5>
            </div>
            <div className='btns'>
                <button onClick={ () => btnHandler(book)} className='btn-add'>Add</button>
            </div>
        </div>
    );
};

export default Cards;