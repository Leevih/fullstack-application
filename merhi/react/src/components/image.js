import React from 'react'

const Image = (props) => {
    const { content } = props

    return(
        <div>
            {content.title}
         <img src={content.image}    
            style={{maxWidth: "200px",}}/>
        </div>
    )
}

export default Image