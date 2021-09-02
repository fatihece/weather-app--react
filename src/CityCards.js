import React, {useEffect, useState} from 'react'
import "./CityCards.css"
import Istanbul from "./CityCards/Istanbul"

const CityCards = () => {
    return (
        <div className="card-container">
            <Istanbul />
        </div>
    )
}

export default CityCards
