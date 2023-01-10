export const ProductCard = ({ image, name, price, quantity, description, isDiscount, discount, mrp}) => {
    return(
        <div className="product-card">
            {isDiscount && 
            <div className="product-card-overlay">
                <div className="product-card-overlay-discount">
                    {discount}
                </div>
            </div>}
            <div className="product-card-image">
                <img src={image} alt="product" />
            </div>
            <div className="product-card-name">
                <div className="product-card-name-title">
                    <div className="product-card-name-title-name">
                        {name}
                    </div>
                    <div className="product-card-name-title-price">
                        <div className="product-card-name-title-price-actual">
                            {price}
                            {isDiscount && <div className="product-card-name-title-price-actual-mrp">{mrp}</div>}
                        </div>
                        <div className="product-card-name-title-price-quantity">
                            {quantity}
                        </div>
                    </div>
                </div>
                <hr className="product-card-name-line"></hr>
                <div className="product-card-name-description">
                    {description}
                </div>
            </div>
        </div>
    );
}