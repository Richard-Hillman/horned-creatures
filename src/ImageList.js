import React, { Component } from 'react'
import ImageListItem from './ImageListItem'


export default class ImageList extends React.Component {
            render() {
                
                const filteredAnimals = this.props.imageBoogers.filter((item) => {
                 
                    if(!this.state.filter) return true;
        
                    if(item.keyword === this.state.filter) return true;
        
                    return false
                });
                
                return (
                <>    
                
                    <div>
                            {
                            filteredAnimals.map((item, i) => {
                                return <ImageListItem
                                scandalousDragonHornImageSource={item.url}
                                alternativeDisposition={item.description}
                                magicalKeys={item.keyword}
                                hornsFromHell={item.horns}
                                key={i}
                                />
                            })
                            }
                    </div>
            
                </>
            
        )
    }
}
