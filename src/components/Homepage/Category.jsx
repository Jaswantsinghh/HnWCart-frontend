export const Category = ({ image, name }) => {
    return(
        <div className="category">
            <div className="category-image">
                <img src={image} alt="category" />
            </div>
            <div className="category-name">
                {name}
            </div>
        </div>
    );
}