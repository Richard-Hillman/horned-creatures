import './App.css';
import React from 'react'
import Header from './Header.js';
import Footer from './Footer.js';
import ImageList from './ImageList';
import Dropper from './Dropper.js';
import images from './Data.js';

// move dropdown to app.js
// move filter state to app.js
// give dropdown the debit to achange app.js
// give imagelist filter
export default class App extends React.Component {
 
  state = {
    filter:''
  }


handleChange = e => {
    this.setState({
        filter: e.target.value,
    });
}



  render() {
    console.log(images);
    return (
    
      <div className="coolHands">
      
        <Dropper handleChange={this.handleChange} />
        <Header />
        <ImageList imageBoogers={images}/>
        <Footer />
      

      </div>
    
    );
  }
}