import { Header, Navbar, Footer, NavbarActions } from '../components/General';
import product2 from '../assets/img/product4.png';
import product2sec2 from '../assets/img/product2sec2.png';
import { FilledStar, UnfilledStar, RightArrow } from '../assets/icons';
import { useNavigate } from 'react-router-dom';
import brand1 from "../assets/img/brand1.png";
import brand2 from "../assets/img/brand2.png";
import brand3 from "../assets/img/brand3.png";

export const Product4 = () => {
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
                            <img className='product-container-content-image-secondary-image' src={product2sec2} alt='' />
                            <div className='product-container-content-image-secondary-plus'>+</div>
                        </div>
                    </div>
                    <div className='product-container-content-info'>
                        <div className='product-container-content-info-title'>
                            Whey (Irish Chocolate)
                        </div>
                        <div className='product-container-content-info-company'>
                            by <u>  Bon ISO </u>
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
                                    ₹3499
                                    <div className='product-container-content-info-price-price-original'>
                                        ₹5499
                                    </div>
                                </div>
                                <div className='product-container-content-info-price-price-discount'>
                                    Save - ₹2000
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
                                <div onClick={() => window.open('https://buy.stripe.com/test_cN28AsgDG182cQo3ch', "_blank")} className='product-container-content-info-buttons-buying-buy'>
                                    Buy Now
                                </div>
                            </div>
                            <div className='product-container-content-info-buttons-review'>
                                Add a review
                            </div>
                            <div className='product-container-content-info-buttons-reviews'>
                                <div className='product-container-content-info-buttons-reviews-review'>
                                    <div className='product-container-content-info-buttons-reviews-review-name'>
                                        <p className='product-container-content-info-buttons-reviews-review-name-text'>
                                            Prakash Gupta
                                        </p>
                                        <p className='product-container-content-info-buttons-reviews-review-name-time'>3 weeks ago</p>
                                    </div>
                                    <div className='product-container-content-info-buttons-reviews-review-rating'>
                                        <div className='product-container-content-info-buttons-reviews-review-rating-stars'>
                                            <FilledStar className="product-container-content-info-buttons-reviews-rewiew-rating-stars-star" />
                                            <FilledStar className="product-container-content-info-buttons-reviews-rewiew-rating-stars-star" />
                                            <FilledStar className="product-container-content-info-buttons-reviews-rewiew-rating-stars-star" />
                                            <FilledStar className="product-container-content-info-buttons-reviews-rewiew-rating-stars-star" />
                                            <UnfilledStar className="product-container-content-info-buttons-reviews-rewiew-rating-stars-star" />
                                        </div>
                                        <p className='product-container-content-info-buttons-reviews-review-rating-text'>4/5 Rating</p>
                                    </div>
                                    <div className='product-container-content-info-buttons-reviews-review-text'>
                                        <p>
                                            I'm reviewing this product after consuming 40 servings and the results were great, tastes really good. 
                                            Had a problem mixing it the first day, formed lots of lumps but found out a way after that, just add 25 g of powder in shaker 
                                            and pour 30 ml of water into it (if you mix it with water) and shake it well, no lumps will be formed.
                                        </p>
                                    </div>
                                </div>
                                <div className='product-container-content-info-buttons-reviews-review'>
                                    <div className='product-container-content-info-buttons-reviews-review-name'>
                                        <p className='product-container-content-info-buttons-reviews-review-name-text'>
                                            Prakash Gupta
                                        </p>
                                        <p className='product-container-content-info-buttons-reviews-review-name-time'>3 weeks ago</p>
                                    </div>
                                    <div className='product-container-content-info-buttons-reviews-review-rating'>
                                        <div className='product-container-content-info-buttons-reviews-review-rating-stars'>
                                            <FilledStar />
                                            <FilledStar />
                                            <FilledStar />
                                            <FilledStar />
                                            <UnfilledStar />
                                        </div>
                                        <p className='product-container-content-info-buttons-reviews-review-rating-text'>4/5 Rating</p>
                                    </div>
                                    <div className='product-container-content-info-buttons-reviews-review-text'>
                                        <p>
                                            I'm reviewing this product after consuming 40 servings and the results were great, tastes really good. 
                                            Had a problem mixing it the first day, formed lots of lumps but found out a way after that, just add 25 g of powder in shaker 
                                            and pour 30 ml of water into it (if you mix it with water) and shake it well, no lumps will be formed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='product-container-content-info-buttons-reviews-more'>
                                more reviews
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-container-content-description'>
                    <h1>Myprotein Impact Whey Protein, 5.5 lb Chocolate Smooth</h1>
                    <p>A good quality whey protein supplement is the most important part of your diet when you are looking for faster gains and better results. Whey proteins are a derivative of milk proteins and are one of the most widely consumed types of protein supplement world over. Myprotein Impact Whey Protein, 5.5 lb Chocolate Smooth is one of the most popular brands of whey proteins. Made with high-quality ingredients, this product is extremely reliable and is sure to give you the results that you want.</p>
                    <h1>Benefits of the Myprotein Impact Whey Protein, 5.5 lb Chocolate Smooth</h1>
                    <p>Made with only 100% premium grade whey protein concentrates, this is one of the most widely used products in the market today. Myprotein Impact Whey Protein, 5.5 lb Chocolate Smooth aims at giving you quicker results and helps in maintaining your gains. It is loaded with ingredients that provide several benefits such as:</p>
                    <ul>
                        <li><span>Reliable source of proteins:</span> Each serving of Myprotein Whey provides you with 20 grams of proteins. This includes 100% whey protein concentrates that are derived from the best in the class raw material. Your body gets a sustained supply of pure proteins to aid faster gains and also sustained maintenance of your physique.</li>
                        <li><span>Highly bioavailable:</span> Myprotein Impact Whey Protein, 5.5 lb Chocolate Smooth is highly bioavailable and is easily absorbed by your body. This means that you get the maximum benefits from the product and also get the results that you want.</li>
                        <li><span>Faster recovery:</span> Myprotein Impact Whey Protein, 5.5 lb Chocolate Smooth has a great amino acid profile that helps replenish depleted amino acid as you work out. Each scoop provides you with 4.5 g of Branched Chain Amino Acids and 3.6 g of Glutamine that are absorbed instantly after an intense training session to help your muscles recover faster.</li>
                        <li><span>Designed to provide lean muscles:</span> Myprotein Impact Whey contains only 103 calories, 1.9 grams of fat and 1 gram of carbohydrate per serving. This is ideal for those who are looking primarily at gaining lean muscles.</li>
                    </ul>
                    <h1>Taste</h1>
                    <p>Myprotein Impact Whey Protein, 5.5 lb Chocolate Smooth is extremely delectable and makes a smooth shake whether you consume it with milk or water. Its high mixability allows you to also use it with other beverages of your choice such as smoothies and juices. It is available in several other flavors including Chocolate Brownie, Chocolate Caramel, Coffee Caramel, Cookies and Cream, Latte, Mocha, Raspberry, Rocky Road, Strawberry Cream, Strawberry, Vanilla and Chocolate Mint.</p>
                    <h1>Ingredients</h1>
                    <p>Whey protein isolate, cocoa powder, natural and artificial flavoring, Sucralose and Soy Lecithin.</p>
                    <h1>How to consume</h1>
                    <p>Mix one scoop of Myprotein Impact Whey Protein, 5.5 lb Chocolate Smooth with 6-8 oz of water, milk or any beverage of your choice. Shake well and consume immediately. It is suggested that you consume no more than two scoops per day.</p>
                    <h1>When to consume:</h1>
                    <ul>
                        <li>After workout: The great amino acid profile and the high-quality protein content makes it the perfect after workout drink.</li>
                        <li>Before workout: Whey protein concentrates give you a steady source of nutrients while you workout.</li>
                        <li>Between meals: You can consume an additional scoop in between meals if required to prevent any muscle loss.</li>
                    </ul>
                </div>
                <div className="homepage-content-top-brands">
                    <div className="homepage-content-top-brands-title">
                        <div className="homepage-content-top-brands-title-name">
                            Top
                            <span className="homepage-content-top-brands-title-description"> Protein Powder Brands</span>
                        </div>
                        <div className="homepage-content-top-brands-title-view-all">
                            View All <RightArrow className="homepage-content-top-brands-title-view-all-icon"/>
                        </div>
                    </div>
                    <div className="homepage-content-top-brands-underline">
                        <div className="homepage-content-top-brands-underline-overlap"></div>
                    </div>
                    <div className="homepage-content-top-brands-products">
                        <div className="homepage-content-top-brands-products-brand">
                            <img src={brand1} alt="brand1" className="homepage-content-top-brands-products-brand-image"/>
                        </div>
                        <div className="homepage-content-top-brands-products-brand">
                            <img src={brand2} alt="brand2" className="homepage-content-top-brands-products-brand-image"/>
                        </div>
                        <div className="homepage-content-top-brands-products-brand">
                            <img src={brand3} alt="brand3" className="homepage-content-top-brands-products-brand-image"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
