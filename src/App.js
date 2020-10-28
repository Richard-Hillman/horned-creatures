import './App.css';
import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import ImageList from './ImageList';
import Dropper from './Dropper.js';
import images from './Data.js';

export default class App extends React.Component {
  render() {
    console.log(images);
    return (
    
      <div className="coldHands">

        <Header />

        <div className="boogerImages">
        <Dropper imageBoogers={images} />
        <ImageList className="imagery"/>
        </div> 
        
        <Footer />

      </div>
    
    );
  }
}