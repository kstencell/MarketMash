import LogoContainer from './LogoContainer';
import '../CSS/Header.css'


function Header() {
    return ( 
        <div className='d-flex justify-content-center align-items-center header'>
            <LogoContainer/>
        </div>
     );
}

export default Header;