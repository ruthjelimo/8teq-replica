import AccountBoxIcon from '@mui/icons-material/AccountBox';  
import './Nav.css';
const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <li id='box'> <AccountBoxIcon/> 8teq</li>
                <li id='nav'>Home</li>
                <li >Product</li>
                <li id='nav'>Contact</li>
           

            </ul>
            <p> Automate.Connect.Locate</p>
        
          
        </div>
      );
}
 
export default Nav;