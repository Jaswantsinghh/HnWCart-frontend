import { Header, Navbar, NavbarActions, Footer } from "../components/General";
import { Carousel, ProductCard, Category, BlogCard } from "../components/Homepage";
import { RightArrow } from "../assets/icons";
import { useNavigate } from "react-router-dom";
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
import blog1 from "../assets/img/blog1.png";
import blog2 from "../assets/img/blog2.png";
import blog3 from "../assets/img/blog3.png";
import blog4 from "../assets/img/blog4.png";
import blog5 from "../assets/img/blog5.png";
import blog6 from "../assets/img/blog6.png";

export const Homepage = () => {
    const navigate = useNavigate();
    const products = [
        {
            "image": product1,
            "name": "MB Whey Protein",
            "price": "₹3999",
            "quantity": "1kg",
            "description": "38 orders in the last 1 hour!!",
            "isDiscount": false,
            "link": "/product/1"
        },
        {
            "image": product2,
            "name": "MyProtein Impact Whey",
            "price": "₹2499",
            "quantity": "1kg",
            "description": "Save - ₹1500",
            "isDiscount": true,
            "discount": "38% OFF",
            "mrp": "₹3999",
            "link": "/product/2"
        },
        {
            "image": product3,
            "name": "ON Gold Whey",
            "price": "₹6999",
            "quantity": "2kg",
            "description": "Save - ₹2000",
            "isDiscount": true,
            "discount": "25% OFF",
            "mrp": "₹7999",
            "link": "/product/3"
        },
        {
            "image": product4,
            "name": "Whey (Irish Chocolate)",
            "price": "₹3499",
            "quantity": "1kg",
            "description": "Save - ₹2000",
            "isDiscount": true,
            "discount": "36% OFF",
            "mrp": "₹5499",
            "link": "/product/4"
        },
        {
            "image": product5,
            "name": "MusclePharm COMBAT",
            "price": "₹4999",
            "quantity": "1kg",
            "description": "Save - ₹2500",
            "isDiscount": true,
            "discount": "33% OFF",
            "mrp": "₹7499",
            "link": "/product/5"
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
    
    const blogs = [
        {
            "image": blog1,
            "category": "Bodybuilding",
            "title": "Which protein is right for you?",
        },
        {
            "image": blog2,
            "category": "Healthy Diet",
            "title": "Get ready for 60 days New Year Challenge",
        },
        {
            "image": blog3,
            "category": "Bodybuilding",
            "title": "5 Things to consider while choosing the right GYM...",
        },
        {
            "image": blog4,
            "category": "Bodybuilding",
            "title": "9 Excersises to explore for bigger biceps",
        },
        {
            "image": blog5,
            "category": "Heathy Lifestyle",
            "title": "This is what you should do when you wake up...",
        },
        {
            "image": blog6,
            "category": "Healthy Diet",
            "title": "Are MultiVitamins necessary for Healthy Diet?",
        }
    ];
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
                                    onClick={() => navigate(product.link)}
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
                    <div className="homepage-content-blogs-title">
                        <div className="homepage-content-blogs-title-name">
                            Read our 
                            <span className="homepage-content-blogs-title-description"> BLOGs</span>
                        </div>
                        <div className="homepage-content-blogs-title-view-all">
                            View All <RightArrow className="homepage-content-blogs-title-view-all-icon"/>
                        </div>
                    </div>
                    <div className="homepage-content-blogs-underline">
                        <div className="homepage-content-blogs-underline-overlap"></div>
                    </div>
                    <div className="homepage-content-blogs-blogs">
                        {blogs.map((blog, index) => {
                            return(
                                <BlogCard
                                image={blog.image}
                                category={blog.category}
                                title={blog.title}
                                key={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}