import { ThreeLines, DownArrow } from "../../assets/icons";

export const NavbarActions = () => {
    const actionItems = ["Best Sellers", "Brands", "Deals", "Blogs", "Gift Cards", "Customer Support", "Store Locator"];
    return(
        <div className="navbar-actions">
            <div className="navbar-actions-heading">
                <div className="navbar-actions-heading-icon">
                    <ThreeLines />
                </div>
                <div className="navbar-actions-heading-text">
                    Shop By Category
                </div>
            </div>
            <div className="navbar-actions-items">
                {actionItems.map((item, index) => {
                    return(
                        <div className="navbar-actions-item" key={index}>
                            {item}
                            <DownArrow className="navbar-action-item-down-icon" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}