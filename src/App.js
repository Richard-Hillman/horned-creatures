import './App.css';
import Article from './Article.js';
import Header from './Header.js'
import Footer from './Footer.js'
import ImageList from './ImageList';

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <ImageList />
      <Footer />
    </div>
  );
}

export default App;
