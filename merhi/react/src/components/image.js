import React from 'react'

const Image = (props) => {
    const { content, width } = props

    return(
        <div>
            {content.title}
            <img src={content.data}
            style={{maxWidth: width*20}}    
            />
        </div>
    )
}

export default Image