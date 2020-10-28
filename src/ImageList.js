import React, { Component } from 'react'
import images from './Data.js'
import ImageListItem from './ImageListItem'


export default class ImageList extends Component {
    render() {
        return (
            <div>
                {
                    images.map((item, i) => {
                        return <ImageListItem
                        scandalousDragonHorns={item.url}
                        alternativeDisposition={item.description}
                        magicalKeys={item.keyword}
                        hornsFromHell={item.horns}
                        key={i}
                        />
                    })
                }
            </div>
        )
    }
}
