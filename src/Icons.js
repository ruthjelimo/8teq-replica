import './Icons.css';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import LandslideIcon from '@mui/icons-material/Landslide';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import WebAssetIcon from '@mui/icons-material/WebAsset';

const Icons = () => {
    return ( 
        <div className="icons">
            <ul>
            <li><TravelExploreIcon/></li>
            <li><ChairAltIcon/></li>
           <li><LandslideIcon/></li> 
           <li><DomainAddIcon/></li> 
           <li><RoomServiceIcon/></li> 
           <li><WebAssetIcon/></li>
        

            </ul>
            <div className="satelite">
            <ul>
                <li id='space'>Space<br></br>
                (satelite Data)</li>
                <li>Air<br></br>
                (Aerial Data)</li>
                <li id='land'>Land<br></br>
                (Land Survery Data)</li>
                <li>Building<br></br>
                (BIM)</li>
                <li id='room'>Rooms<br></br>
                (Indoor mapping)</li>
                <li>To Webapp</li>
            </ul>

            </div>
           
           







        </div>
     );
}
 
export default Icons;