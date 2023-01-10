import { Location, Ship, Offer } from "../../assets/icons";

export const Header = () => {
    return(
        <div className="header">
            <div className="header-welcome-text">
                Welcome to worldwide <span className="bold">Health & Wealth CART!</span>
            </div>
            <div className="header-action-items">
                <div className="header-action-items-item">
                    <Location />
                    Deliver to <span className="bold">141008</span>
                </div>
                <div className="header-action-items-item border">
                    <Ship />
                    Track your order
                </div>
                <div className="header-action-items-item">
                    <Offer />
                    All Offers
                </div>
            </div>
        </div>
    );
}