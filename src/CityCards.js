import React from 'react'
import "./CityCards.css"
import Istanbul from "./CityCards/Istanbul"
import London from './CityCards/London'

const CityCards = () => {
    return (
        <div className="card-container">
            <Istanbul />
            <London />
        </div>
    )
}

export default CityCards
