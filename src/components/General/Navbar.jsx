import logo from '../../assets/img/logo.png';
import { Search, Menu, User, Cart } from '../../assets/icons';
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const onButtonClick = () => {
        if (isAuthenticated) {
            localStorage.removeItem("isAuthenticated");
            navigate("/login");
        } else {
            navigate("/login");
        }
    }
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
            <div className="navbar-login" onClick={onButtonClick}>
                <User />
                {isAuthenticated ? "Logout" : "Login"}
            </div>
            <div className="navbar-cart">
                <Cart />
                Cart
            </div>
        </div>
    );
}