import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BiotechIcon from '@mui/icons-material/Biotech';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import './Tech.css'
const Tech = () => {
    return (
        <div className="tech">
            <h2> Technologies</h2>
            <li><AppRegistrationIcon/></li>
            <li><AcUnitIcon/></li> 
            <li><BiotechIcon/></li>
             <li><AirlineSeatFlatIcon/></li>


        </div>
    );
}
 
export default Tech;