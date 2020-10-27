import React, { Component } from 'react'
import images from './Data.js'
import ImageListItem from './ImageListItem'

export default class ImageList extends Component {
    render() {
        return (
            <div>
                {
                    this.images.map((image, i) => {
                        return <ImageListItem
                        name={image.title}
                        description={image.description}
                        keyword={image.keyword}
                        horns={image.horns}
                        key={i}
                        />
                    })
                }
            </div>
        )
    }
}
