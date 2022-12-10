
import './App.css';
import Nav from './Nav';
import About from './About';
import Icons from './Icons';
import Tech from './Tech';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      {/* <Grid/> */}
      <Icons/>
      <Tech/>
      <Product/>
  
    </div>
  );
}

export default App;
