import React from 'react'

function Image( {img, width, height} ) {

    return (

        <img src={img} alt={img} style = {{width: width, height: height}}/>

    )


}

export default Image