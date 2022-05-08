import React from 'react'
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

    function getImageComponent(image, imageWidth, imageHeight, marginLeft, marginRight) {

        console.log(imageWidth, imageHeight, marginLeft, marginRight)

        return (
            <Image 
                img = {image}
                width = { `${imageWidth}px` } 
                height = { `${imageHeight}px` }
                marginLeft = { `${marginLeft}px`}
                marginRight = { `${marginRight}px`}
            />
        )

    }

    function getImagesList(images, imageWidth, imageHeight, margin) {

        console.log(imageWidth, imageHeight, margin)

        return images.map( (image, index) => {

            if (index !== 0) return getImageComponent(image, imageWidth, imageHeight, 0, margin) 

            return getImageComponent(image, imageWidth, imageHeight, margin, margin)
            
        })

    }

    let images = [img1, img2, img3, img4, img5, img6, img7, img8]

    console.log(width)
    return (
        <div className={style.Slider}>

            <Arrow direction='left' />

            <div className={style.Container} style={{ width: width }}>

                <div className={style.ImagesList} style={{ transition: speed }}>

                    { getImagesList(images, imageWidth, imageHeight, margin) }

                </div>

            </div>

            <Arrow direction='right' />

        </div>
    )

}

export default Slider