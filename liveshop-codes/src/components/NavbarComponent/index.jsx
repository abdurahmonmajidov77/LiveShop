import NavLogo from '../../assets/Logo.png';
import './style.css'

function NavbarComponent() {
  return (
    <div className="NavbarComponent">
        <div className="container">
            <img src={NavLogo} alt="" />
        </div>
    </div>
  );
}

export default NavbarComponent;