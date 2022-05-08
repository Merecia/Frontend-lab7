import React from 'react'

function Image( {img, width, height, marginLeft, marginRight} ) {

    return (

        <img 
            src={img} 
            alt={img} 
            style = {{
                boxSizing: 'border-box',
                borderRadius: '5px',
                width: width, 
                height: height,
                marginLeft: marginLeft,
                marginRight: marginRight
            }}
        />

    )


}

export default Image