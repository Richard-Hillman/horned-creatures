import React, { Component } from 'react'

export default class ImageListItem extends Component {
    render() {
        return (
            <div>
                <input type="img"/>
                    <label className="hornedimages">{this.props.url} </label>
            </div>
        )
    }
}
