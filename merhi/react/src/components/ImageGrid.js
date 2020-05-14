import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from './image'

const ImageGrid = (props) => {
    const { images } = props;

    const generateGridRows = (images) => {
        let grid = []
        let row = []
        images.map((item, index) => {
            const tmp = index + 1
            if(tmp % 3 === 0) {
                row.push(item)
                grid.push(row)
                row = []
            } else {
                row.push(item)
                if(tmp === images.length) {
                    grid.push(row)
                }
            }
        })
        return grid
    }

    const generateGridJsx = (gridRows) => {
        const generatedJsx = gridRows.map((row, index) => {
            return (
                <Row key={index}>
                {
                    row.map(item => {
                        return <Image content={item} key={item.id} width={20} />
                    })
                }
            </Row>)
        })

        return generatedJsx
    }

    const renderImages = () => {
        const gridRows = generateGridRows(images)
        const render = generateGridJsx(gridRows)
        return render
    }

    return(
    <Grid fluid>
        <Row>
            {renderImages()}   
        </Row>
    </Grid>
    )
}

export default ImageGrid