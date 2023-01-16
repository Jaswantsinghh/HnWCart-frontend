import cover from '../assets/img/cover.png';
import logoHQ from '../assets/img/logo-hq.png';
import items from '../assets/img/items.png';
import promo1 from '../assets/img/promo1.png';
import promo2 from '../assets/img/promo2.png';
import promo3 from '../assets/img/promo3.png';

import { User } from '../assets/icons';

export const Login = () => {
    return(
        <div className="login">
            <div className="login-background">
                <img className="login-background-image" src={cover} alt="cover" />
            </div>
            <div className="login-container">
                <div className='login-container-banners'>
                    <img className='login-container-banners-logo' src={logoHQ} alt="logo" />
                    <img className='login-container-banners-items' src={items} alt="items" />
                </div>
                <div className='login-container-form'>
                    <div className='login-container-form-container'>
                        <div className='login-container-form-container-title'>
                            Health & Wealth Kart
                        </div>
                        <div className='login-container-form-container-actions'>
                            <div className='login-container-form-container-actions-login'>
                                <User />
                                Login or Signup
                            </div>
                            <div className='login-container-form-container-actions-phone'>
                                <div className='login-container-form-container-actions-phone-code'>
                                    +91
                                </div>
                                <input className='login-container-form-container-actions-phone-number' placeholder='Enter phone number' />
                            </div>
                            <button className='login-container-form-container-actions-button'>
                                Get OTP
                            </button>
                        </div>
                    </div>
                    <div className='login-container-form-promotions'>
                        <p className='login-container-form-promotions-text'>
                            Brands Available:
                        </p>
                        <div className='login-container-form-promotions-brands'>
                            <img className='login-container-form-promotions-brands-image' src={promo1} alt="promo1" />
                            <img className='login-container-form-promotions-brands-image' src={promo2} alt="promo2" />
                            <img className='login-container-form-promotions-brands-image' src={promo3} alt="promo3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}