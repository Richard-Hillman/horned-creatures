import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import ImageList from './ImageList';

function App() {
  return (
    <div className="App">

      <Header />

      <span className="hornyWizards">
      <ImageList />
      </span>

      <Footer />

    </div>
  );
}

export default App;
