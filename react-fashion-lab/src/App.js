import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/Header';
import Article from './components/Article';


function App() {
  const navOptions = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"];
  

  return (
    <div className="App">
      <Header />
      <Nav nav={navOptions} />
      <Article 
      date="11/12/20"
      title="On the Street in Brooklyn"
      imageSrc="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg"
      letter="C"/>
      
      <Article 
      date="11/11/20"
      title="Vintage in Vogue"
      imageSrc="https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-2.jpg"
      letter="S"/>
      
      <Footer nav={navOptions} />
   
    </div>
  );
}

export default App;
