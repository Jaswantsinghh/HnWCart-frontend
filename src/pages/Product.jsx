import { Header, Navbar, Footer, NavbarActions } from '../components/General';
import product2 from '../assets/img/product2main.png';
import product2sec1 from '../assets/img/product2sec1.png';
import product2sec2 from '../assets/img/product2sec2.png';
import { FilledStar, UnfilledStar, DownArrow } from '../assets/icons';
import { useNavigate } from 'react-router-dom';

export const Product = () => {
    const navigate = useNavigate();
    return(
        <div className='product'>
            <Header />
            <Navbar />
            <NavbarActions />
            <div className='product-container'>
                <div className='product-container-border'>
                    <div className='product-container-border-overlay'>
                    </div>
                </div>
                <div className='product-container-content'>
                    <div className='product-container-content-image'>
                        <div className='product-container-content-image-main'>
                            <img className='product-container-content-image-main-image' src={product2} alt='' />
                        </div>
                        <div className='product-container-content-image-secondary'>
                            <img className='product-container-content-image-secondary-image' src={product2} alt='' />
                            <img className='product-container-content-image-secondary-image' src={product2sec1} alt='' />
                            <img className='product-container-content-image-secondary-image' src={product2sec2} alt='' />
                            <div className='product-container-content-image-secondary-plus'>+</div>
                        </div>
                    </div>
                    <div className='product-container-content-info'>
                        <div className='product-container-content-info-title'>
                            MyProtein Impact Whey Protein Powder
                        </div>
                        <div className='product-container-content-info-company'>
                            by <u>  MyProtein </u>
                        </div>
                        <hr className='product-container-content-info-line' />
                        <div className='product-container-content-info-rating'>
                            <div className='product-container-content-info-rating-stars'>
                                <FilledStar />
                                <FilledStar />
                                <FilledStar />
                                <FilledStar />
                                <UnfilledStar />
                            </div>
                            <div className='product-container-content-info-rating-info'>
                                4.2 
                                <p className='product-container-content-info-rating-info-text'> &nbsp; (342 reviews) </p>
                            </div>
                        </div>
                        <hr className='product-container-content-info-rating-line' />
                        <div className='product-container-content-info-price'>
                            <div className='product-container-content-info-price-price'>
                                <div className='product-container-content-info-price-price-discounted'>
                                    ₹2499
                                    <div className='product-container-content-info-price-price-original'>
                                        ₹3000
                                    </div>
                                </div>
                                <div className='product-container-content-info-price-price-discount'>
                                    Save - ₹1500
                                </div>
                            </div>
                            <div className='product-container-content-info-price-quantity'>
                                <div className='product-container-content-info-price-quantity-text'>
                                    1kg
                                </div>
                            </div>
                        </div>
                        <hr className='product-container-content-info-rating-line' />
                        <div className='product-container-content-info-buttons'>
                            <div className='product-container-content-info-buttons-buying'>
                                <div className='product-container-content-info-buttons-buying-cart'>
                                    Add to Cart
                                </div>
                                <div onClick={() => window.location.replace('https://buy.stripe.com/test_6oEcQIevy6smbMkbIK')} className='product-container-content-info-buttons-buying-buy'>
                                    Buy Now
                                </div>
                            </div>
                            <div className='product-container-content-info-buttons-review'>
                                Add a review
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
