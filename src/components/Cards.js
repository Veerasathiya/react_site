import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Games</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className='cards__items'>
                    <CardItem
                    src='images/lily.jpg'
                    text='Lily-The Witch Adventure'
                    label='Arcade'
                    path='/games'
                    />

                    <CardItem 
                    src="images/Cube-Scuttle.JPG"
                    text="Cube-Scuttle"
                    label="Arcade"
                    path="/games" />

                </ul>    
                </div>
            </div>
        </div>
    )
}

export default Cards
