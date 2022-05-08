import React from 'react'

import style from './Arrow.module.css'

import arrowLeft from './images/arrow-left.png'
import arrowRight from './images/arrow-right.png'

function Arrow({ direction }) {

    let arrow

    if (direction === 'left') arrow = arrowLeft

    else if (direction === 'right') arrow = arrowRight

    return (
        <div className = {style.Arrow}>
            <img src={arrow} alt='arrow' />
        </div>
    )

}

export default Arrow