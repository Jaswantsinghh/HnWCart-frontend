export const BlogCard = ({ image, category, title }) => {
    return(
        <div className="blog-card">   
            <div className="blog-card-image">
                <img className="blog-card-image-image" src={image} alt="blog" />
            </div>
            <div className="blog-card-category">
                {category}
            </div>
            <div className="blog-card-title">
                {title}
            </div>
        </div>
    );
}