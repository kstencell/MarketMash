import '../CSS/LogoContainer.css'
import logo from '../assets/logos/logo-trimmed.png'

function LogoContainer() {
    return (
        <div className='d-flex p-0 m-0 justify-content-center align-items-center logoContainer'>
            <img className='h-100' src={logo}></img>
        </div>
     );
}

export default LogoContainer;