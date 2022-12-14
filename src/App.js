
import './App.css';
import Nav from './Nav';
import About from './About';
import Icons from './Icons';
import Tech from './Tech';
import Product from './Product';
import Footer from './Footer';
import Contact from './Contact';



import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      {/* <Grid/> */}
      <Icons/>
      <Tech/>
      <Product/>
      <Contact/>
      <Footer/>
   
      
      
      
      
  
    </div>
  );
}

export default App;
