import React from 'react';
import images from './Data.js'

export default class Article extends React.Component {
    render() {
        return (
          <div className='article'>
            <img 
            className='image'
            src={images.url}
            alt="horned" />
          </div>
        );
    }
  }