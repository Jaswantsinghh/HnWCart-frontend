import { Header, Navbar, NavbarActions } from "../components/General";
import { Carousel, ProductCard, Category } from "../components/Homepage";
import { RightArrow } from "../assets/icons";
import product1 from "../assets/img/product1.png";
import product2 from "../assets/img/product2.png";
import product3 from "../assets/img/product3.png";
import product4 from "../assets/img/product4.png";
import product5 from "../assets/img/product5.png";
import category1 from "../assets/img/category1.png";
import category2 from "../assets/img/category2.png";
import category3 from "../assets/img/category3.png";
import category4 from "../assets/img/category4.png";
import category5 from "../assets/img/category5.png";
import category6 from "../assets/img/category6.png";
import category7 from "../assets/img/category7.png";
import brand1 from "../assets/img/brand1.png";
import brand2 from "../assets/img/brand2.png";
import brand3 from "../assets/img/brand3.png";

export const Homepage = () => {
    const products = [
        {
            "image": product1,
            "name": "MB Whey Protein",
            "price": "₹3999",
            "quantity": "1kg",
            "description": "38 orders in the last 1 hour!!",
            "isDiscount": false
        },
        {
            "image": product2,
            "name": "MyProtein Impact Whey",
            "price": "₹2499",
            "quantity": "1kg",
            "description": "Save - ₹1500",
            "isDiscount": true,
            "discount": "38% OFF",
            "mrp": "₹3999"
        },
        {
            "image": product3,
            "name": "ON Gold Whey",
            "price": "₹6999",
            "quantity": "2kg",
            "description": "Save - ₹2000",
            "isDiscount": true,
            "discount": "25% OFF",
            "mrp": "₹7999"
        },
        {
            "image": product4,
            "name": "Whey (Irish Chocolate)",
            "price": "₹3499",
            "quantity": "1kg",
            "description": "Save - ₹2000",
            "isDiscount": true,
            "discount": "36% OFF",
            "mrp": "₹5499"
        },
        {
            "image": product5,
            "name": "MusclePharm COMBAT",
            "price": "₹4999",
            "quantity": "1kg",
            "description": "Save - ₹2500",
            "isDiscount": true,
            "discount": "33% OFF",
            "mrp": "₹7499"
        }
    ];

    const categories = [
        {
            "image": category1,
            "name": "Protein Powder"
        },
        {
            "image": category2,
            "name": "Multivitamins"
        },
        {
            "image": category3,
            "name": "Body Oil"
        },
        {
            "image": category4,
            "name": "Creatine"
        },
        {
            "image": category5,
            "name": "Protein Bar"
        },
        {
            "image": category6,
            "name": "Ayurveda & Herbs"
        },
        {
            "image": category7,
            "name": "Healthy Snacks"
        },
    ]

    return(
        <div className="homepage">
            <Header />
            <Navbar />
            <NavbarActions />
            <Carousel />
            <div className="homepage-content">
                <div className="homepage-content-bestseller">
                    <div className="homepage-content-bestseller-title">
                        <div className="homepage-content-bestseller-title-name">
                            BEST SELLERS -
                            <span className="homepage-content-bestseller-title-description"> PROTEIN POWDER</span>
                        </div>
                        <div className="homepage-content-bestseller-title-view-all">
                            View All <RightArrow className="homepage-content-bestseller-title-view-all-icon"/>
                        </div>
                    </div>
                    <div className="homepage-content-bestseller-underline">
                        <div className="homepage-content-bestseller-underline-overlap"></div>
                    </div>
                    <div className="homepage-content-bestseller-products">
                        {products.map((product, index) => {
                            return(
                                <ProductCard 
                                    image={product.image} 
                                    name={product.name} 
                                    price={product.price} 
                                    quantity={product.quantity} 
                                    description={product.description} 
                                    isDiscount={product.isDiscount} 
                                    discount={product.discount} 
                                    mrp={product.mrp} 
                                    key={index} 
                                />
                            );
                        })
                    }
                    </div>
                </div>
                <div className="homepage-content-top-categories">
                    <div className="homepage-content-top-categories-title">
                        <div className="homepage-content-top-categories-title-name">
                            Shop From
                            <span className="homepage-content-top-categories-title-description"> Top Categories</span>
                        </div>
                        <div className="homepage-content-top-categories-title-view-all">
                            View All <RightArrow className="homepage-content-top-categories-title-view-all-icon"/>
                        </div>
                    </div>
                    <div className="homepage-content-top-categories-underline">
                        <div className="homepage-content-top-categories-underline-overlap"></div>
                    </div>
                    <div className="homepage-content-top-categories-products">
                        {categories.map((category, index) => {
                            return(
                                <Category
                                image={category.image}
                                name={category.name}
                                key={index}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="homepage-content-top-brands">
                    <div className="homepage-content-top-brands-title">
                        <div className="homepage-content-top-brands-title-name">
                            Top
                            <span className="homepage-content-top-brands-title-description"> Health Brands</span>
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
                <div className="homepage-content-blogs">
                    <div className="homepage-content-top-brands-title">
                        <div className="homepage-content-top-brands-title-name">
                            Read our 
                            <span className="homepage-content-top-brands-title-description"> BLOGs</span>
                        </div>
                        <div className="homepage-content-top-brands-title-view-all">
                            View All <RightArrow className="homepage-content-top-brands-title-view-all-icon"/>
                        </div>
                    </div>
                    <div className="homepage-content-top-brands-underline">
                        <div className="homepage-content-top-brands-underline-overlap"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}