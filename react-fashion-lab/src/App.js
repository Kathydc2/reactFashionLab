import './App.css';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";


function App() {
  const navOptions = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"];

  return (
    <div className="App">
      <Header />
      <Nav nav={navOptions} />
      <hr></hr>
      <Footer nav={navOptions} />
   
    </div>
  );
}

export default App;
