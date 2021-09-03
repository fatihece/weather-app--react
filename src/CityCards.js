import React from 'react'
import "./CityCards.css"
import Istanbul from "./CityCards/Istanbul"
import London from './CityCards/London'
import Sydney from "./CityCards/Sydney"

const CityCards = () => {
    return (
        <div className="card-container">
            <Istanbul />
            <London />
            <Sydney />
        </div>
    )
}

export default CityCards
