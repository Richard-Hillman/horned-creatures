import React, { Component } from 'react'
// PRESENTATIONAL SIDE 
export default class ImageListItem extends Component {
    render() {
        return (
            <div className="somethingGood">

                <img className="profilePicture" src={this.props.scandalousDragonHornImageSource} alt={this.props.alternativeDispostion} />

                <div>Keyword={this.props.magicalKeys}</div>
                
                <div>Horns Of The Devil Creatures={this.props.hornsFromHell}</div>   

            </div>
        )
    }
}
