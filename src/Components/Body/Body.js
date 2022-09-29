import React, { useEffect, useState } from 'react';
import Info from '../info-area/Info';
import Cards from '../main-cards/Cards';
import Questions from '../Questions/Questions';
import './Body.css'

const Body = () => {
    const [Books, setBooks] = useState([])
    const [carts, setcarts] =useState([])
    useEffect(() => {
        fetch('Books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const btnHandler = (book) => {
        console.log(book);
        const newcart = [...carts, book]
        setcarts(newcart);
        
    }

    return (
        <div>
            <div className='body-container'>
                <div className="book-container">
                    {
                        Books.map(Book => <Cards
                            key={Book.id}
                            book={Book}
                            btnHandler = {btnHandler}></Cards>)
                    }
                </div>
                <div className="info-area">
                    <Info carts={carts}></Info>
                    <Questions></Questions>
                </div>
            </div>
        </div>
    );
};

export default Body;