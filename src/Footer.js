import './Footer.css';
import './Footer.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox'; 
import FacebookIcon from '@mui/icons-material/Facebook'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return ( 
        <div className="footer">
        <div className="teq">
            <p><span><AccountBoxIcon fontSize='large'/> </span>8teq<br></br>automate.connect.locate</p>
            <div className="cons">
                <li><InstagramIcon/></li>
                <li><FacebookIcon/></li>
                <li><TwitterIcon/></li>
            </div>

        </div>
        <div className="company">
            <h6>Company</h6>
            <h6>About Us</h6>
            <h6>Technologies</h6>
            <h6>Products</h6>
           
        </div>
        <div className="contact">
            <h6>Contact Us</h6>
            <h6>8TEQ Business Park, Donholm, Outer</h6>
            <h6>Ring Road Nairobi - Kenya</h6>
            <h6>info@8teq.co.ke</h6>
            <h6>+254 785 681880</h6>
        </div>
        <div className="power">
            <p>© Powered by Abxtract Venture Labs</p>
        </div>
        </div>
        
     );
}
 
export default Footer;