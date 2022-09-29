import React, { useEffect, useState } from 'react';
import Cards from '../main-cards/Cards';
import './Body.css'

const Body = () => {
    const [Books, setBooks] = useState([])
    useEffect(() => {
        fetch('Books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <div className='body-container'>
                <div className="book-container">
                    {
                        Books.map(Book => <Cards
                            key={Book.id}
                            book = {Book} ></Cards>)
                    }
                </div>
                <div className="info-area">
                    <h3>this is ssidde area</h3>
                </div>
            </div>
        </div>
    );
};

export default Body;