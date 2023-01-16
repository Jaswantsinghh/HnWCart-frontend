import logo from '../../assets/img/logo.png';
import { Search, Menu, User, Cart } from '../../assets/icons';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    return(
        <div className="navbar">
            <div className="navbar-logo" onClick={() => navigate('/')}>
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-search">
                <div className='navbar-search-container'>
                    <Search />
                    <input className='navbar-search-container-input' type="text" placeholder="Search essentials, supplements and more..." />
                </div>
                <Menu />
            </div>
            <div className="navbar-login" onClick={() => navigate('/login')}>
                <User />
                Login
            </div>
            <div className="navbar-cart">
                <Cart />
                Cart
            </div>
        </div>
    );
}