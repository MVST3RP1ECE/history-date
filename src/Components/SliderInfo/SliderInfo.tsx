import { facts } from 'Components/types'
import React from 'react'

export default function SliderInfo({ year, fact }: facts) {
    return (
        <div className='slider_info'>
            <h4>{year}</h4>
            <p>{fact}</p>
        </div>
    )
}
