import React from 'react'
import "./CityCards.css"
import Istanbul from "../CityCards/Istanbul"
import London from '../CityCards/London'
import Sydney from "../CityCards/Sydney"
import Paris from "../CityCards/Paris"
import Berlin from '../CityCards/Berlin'
import Moscow from '../CityCards/Moscow'

const CityCards = () => {
    return (
        <div className="card-container">
            <Istanbul />
            <London />
            <Sydney />
            <Paris />
            <Berlin />
            <Moscow/>
        </div>
    )
}

export default CityCards
