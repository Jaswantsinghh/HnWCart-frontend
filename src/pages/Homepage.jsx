import { Header, Navbar, NavbarActions } from "../components/General";
import { Carousel, ProductCard } from "../components/Homepage";
import { RightArrow } from "../assets/icons";
import product1 from "../assets/img/product1.png";
import product2 from "../assets/img/product2.png";
import product3 from "../assets/img/product3.png";
import product4 from "../assets/img/product4.png";
import product5 from "../assets/img/product5.png";

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
            </div>
        </div>
    );
}