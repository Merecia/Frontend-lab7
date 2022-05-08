import React, {useEffect, useState} from 'react'
import style from './Slider.module.css'

import Arrow from '../Arrow/Arrow'
import Image from '../Image/Image'

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'

function Slider({ width, activeSlides, speed }) {

    const margin = 20
    const imageHeight = 300
    const imageWidth = (parseInt(width) - margin * ( parseInt(activeSlides) + 1)) / parseInt(activeSlides)

    const [position, setPosition] = useState(0)
    const [counter, setCounter] = useState(0)
    const [leftButtonDisabled, setLeftButtonDisabled] = useState(true)
    const [rightButtonDisabled, setRightButtonDisabled] = useState(false)

    let images = [img1, img2, img3, img4, img5, img6, img7, img8]

    function getImageComponent(image, imageWidth, imageHeight, marginLeft, marginRight) {

        return (
            <Image 
                key = {image}
                img = {image}
                width = { `${imageWidth}px` } 
                height = { `${imageHeight}px` }
                marginLeft = { `${marginLeft}px`}
                marginRight = { `${marginRight}px`}
            />
        )

    }

    function getImagesList(images, imageWidth, imageHeight, margin) {

        return images.map( (image, index) => {

            if (index !== 0) return getImageComponent(image, imageWidth, imageHeight, 0, margin) 

            return getImageComponent(image, imageWidth, imageHeight, margin, margin)
            
        })

    }

    function leftArrowClick() {

        setPosition( position + (imageWidth + margin) )

        setCounter( counter - 1 )

    }

    function rightArrowClick() {
        
        setPosition( position - (imageWidth + margin) )

        setCounter( counter + 1 )

    }

    useEffect(() => {

        if (counter === 0) 
            setLeftButtonDisabled(true)

        if (counter > 0) 
            setLeftButtonDisabled(false)

        if ( counter < (images.length - activeSlides) )  
            setRightButtonDisabled(false)

        if (counter === (images.length - activeSlides) ) 
            setRightButtonDisabled(true)

    }, [counter, images.length, activeSlides])

    

    return (
        <div className={style.Slider}>

            <Arrow 
                direction='left' 
                onClick = {leftArrowClick}
                disabled = {leftButtonDisabled} 
            />

            <div className={style.Container} style={{ width: width }}>

                <div 
                    className={style.ImagesList} 
                    style={{ 
                        transition: speed, 
                        transform: `translateX(${position}px)` 
                    }}
                >

                    { getImagesList(images, imageWidth, imageHeight, margin) }

                </div>

            </div>

            <Arrow 
                direction='right' 
                onClick = {rightArrowClick} 
                disabled = {rightButtonDisabled} 
            />

        </div>
    )

}

export default Slider