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

function Slider ( {width, activeSlides, speed} ) {

    
    const margin = 20
    const imageHeight = 100
    const imageWidth = ( parseInt(width) - margin * (activeSlides + 1) ) / activeSlides

    function getImageComponent(image, imageWidth, imageHeight) {

        return (
            <Image 
                img = {image}
                width = { `${imageWidth}px` } 
                height = { `${imageHeight}px` }
            />
        )

    }

    function getImagesList(images, imageWidth, imageHeight) {

        let imagesList = []

        for (let i = 0; i < images.length; i++ ) 
            imagesList.push( getImageComponent(images[i], imageWidth, imageHeight) )

        return imagesList

    }

    let images = [img1, img2, img3, img4, img5, img6, img7, img8]

    return (    

        <div className = {style.Slider} style = {{width: width}}>

            <Arrow direction = 'left'/>

            <div className = {style.Container}> 

                <div className = {style.ImagesList} style = {{transition: speed}}>
                    
                    { getImagesList(images, imageWidth, imageHeight) }

                </div>

            </div>

            <Arrow direction = 'right'/>

        </div>
    )

}

export default Slider