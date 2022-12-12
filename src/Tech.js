import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BiotechIcon from '@mui/icons-material/Biotech';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import './Tech.css'
const Tech = () => {
    return (
        <div className="tech">
             <h2> Technologies</h2>
            <div className="tc">
                
            <li id='app'><AppRegistrationIcon fontSize='large'/>
            </li>
            <li id='unit'><AcUnitIcon fontSize='large'/></li> 
            <li id='tech'><BiotechIcon fontSize='large'/></li>
             <li id='seat'><AirlineSeatFlatIcon fontSize='large'/></li>

            </div>
            


        </div>
    );
}
 
export default Tech;