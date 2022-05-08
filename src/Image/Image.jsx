import React from 'react'

function Image( {img, width, height, marginLeft, marginRight} ) {

    console.log(width, height, marginLeft, marginRight)

    return (

        <img 
            src={img} 
            alt={img} 
            style = {{
                boxSizing: 'border-box',
                width: width, 
                height: height,
                marginLeft: marginLeft,
                marginRight: marginRight
            }}
        />

    )


}

export default Image