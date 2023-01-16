import cover from '../assets/img/cover.png';
import logoHQ from '../assets/img/logo-hq.png';
import items from '../assets/img/items.png';
import promo1 from '../assets/img/promo1.png';
import promo2 from '../assets/img/promo2.png';
import promo3 from '../assets/img/promo3.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../assets/icons';

export const Login = () => {
    const [isOTPsent, setIsOTPsent] = useState(false);
    const [first, setFirst] = useState(0);
    const [sec, setSec] = useState(0);
    const [third, setThird] = useState(0);
    const [fourth, setFourth] = useState(0);
    const [fifth, setFifth] = useState(0);
    const [sixth, setSixth] = useState(0);

    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const onButtonClick = () => {
        if (!isOTPsent) {
            if(phone.length === 10) {
                setIsOTPsent(true);
            } else {
                alert("Please enter a valid phone number");
            }
        } else {
            if (first == 1 && sec == 2 && third == 3 && fourth == 4 && fifth == 5 && sixth == 6) {
                localStorage.setItem('isAuthenticated', true);
                navigate('/');
            } else {
                alert("Please enter a valid OTP");
            }
        }
    }

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
                                {isOTPsent ? "Enter OTP" : "Login or Signup"}
                            </div>
                            {isOTPsent ? (
                                <div className='login-otp'>
                                    <input onChange={(e) => setFirst(e.target.value)} className='login-otp-input'/>
                                    <input onChange={(e) => setSec(e.target.value)} className='login-otp-input'/>
                                    <input onChange={(e) => setThird(e.target.value)} className='login-otp-input'/>
                                    <input onChange={(e) => setFourth(e.target.value)} className='login-otp-input'/>
                                    <input onChange={(e) => setFifth(e.target.value)} className='login-otp-input'/>
                                    <input onChange={(e) => setSixth(e.target.value)} className='login-otp-input'/>
                                </div>
                            ) : (
                                <div className='login-container-form-container-actions-phone'>
                                <div className='login-container-form-container-actions-phone-code'>
                                    +91
                                </div>
                                <input className='login-container-form-container-actions-phone-number' placeholder='Enter phone number' onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            )}
                            <button className='login-container-form-container-actions-button' onClick={onButtonClick}>
                                {isOTPsent ? "Submit" : "Get OTP"}
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