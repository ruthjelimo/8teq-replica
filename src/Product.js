/* eslint-disable react/jsx-no-comment-textnodes */
import './Product.css';
import Button from 'react-bootstrap/Button';
// import Teq from './Images/8teq.jpg';
import Teq from './8teq.jpg'


import CheckBoxIcon from '@mui/icons-material/CheckBox';
const Product = () => {
    return ( 
        <div className="product">
            <h2>Our Products are</h2>
            <li>Jengo3D</li>
            <li>NBIS</li>
            <li>Umojamaps</li>

            <div className="map">
                <h3>Jengo3D</h3>
                <p>
                UmojaMaps is a platform that has up to date information on all geo-<br></br>
                located data such as amenities(schools, hospitals, churches),<br></br>
                 infrastructure(road, power lines,),  drainage(rivers, water bodies) ,<br></br> 
                 boundaries info. The platform has other functionalities as Routing <br></br>
                 and Geocoding. It is a central platform to access all government <br></br>
                 information.
                </p>
                

            </div>
            <div className="features">
                <h3>Features</h3>
               <p><CheckBoxIcon/>Target Identification</p> 
               <p><CheckBoxIcon/>Real-time events alerts</p>
               <p><CheckBoxIcon/>Watchlist monitoring and management</p>
               <p><CheckBoxIcon/>Events reports & Secure video management</p>
               
               <Button variant="primary">Explore NBIS</Button>
               <div className="image">
                 <img src={Teq} alt="" height={400} width={500} />
            
           
    
        
              
            </div>
             
             
               

               

            </div>
          


            
        </div>
     );
}
 
export default Product;