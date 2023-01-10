import { LeftArrow, RightArrow } from "../../assets/icons";
import banner1 from "../../assets/img/banner1.png";

export const Carousel = () => {
    return(
        <div className="carousel">
            <div className="carousel-screen">
                <img src={banner1} alt="banner1" />
                <div className="carousel-left">
                    <LeftArrow />
                </div>
                <div className="carousel-right">
                    <RightArrow />
                </div>
            </div>
        </div>
    );
}