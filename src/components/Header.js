import NucampLogo from '../app/assets/img/logo.png'
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
                <NavbarBrand href='/'>
                    <img src={NucampLogo} alt='nucamp logo'></img>
                </NavbarBrand>
      </Navbar>
    )
}
    
export default Header;