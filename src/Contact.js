import './Contact.css';
import Button from 'react-bootstrap/Button';
const Contact = () => {
    return ( <div className="Contact">
        <p>In case you would want to utilize any of our product <br></br>
        or any other enquiries click the button below to<br></br>
         contact us.</p>
         <div className="Button">
         <Button variant="primary">Contact Us</Button>

         </div>
        
    </div> );
}
 
export default Contact;