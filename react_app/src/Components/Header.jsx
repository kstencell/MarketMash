import LogoContainer from './LogoContainer';
import '../CSS/Header.css'
import chooseCompany from '../assets/choose-company.png'


function Header() {
    return ( 
        <div className='d-flex justify-content-center align-items-center header'>
            <LogoContainer/>
            <div className='choose-company-text-container'>
                <img className='choose-company-text' alt='choose the bigger company' src={chooseCompany}></img>
            </div>
        </div>
     );
}

export default Header;