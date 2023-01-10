import logo from '../../assets/img/logo.png';
import { Search, Menu, User, Cart } from '../../assets/icons';
export const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-search">
                <div className='navbar-search-container'>
                    <Search />
                    <input className='navbar-search-container-input' type="text" placeholder="Search essentials, supplements and more..." />
                </div>
                <Menu />
            </div>
            <div className="navbar-login">
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