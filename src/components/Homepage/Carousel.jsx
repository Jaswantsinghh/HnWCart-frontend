import { LeftArrow, RightArrow } from "../../assets/icons";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import { useState } from "react";

export const Carousel = () => {

    const banners = [banner1, banner2, banner3];
    const [currentBanner, setCurrentBanner] = useState(0);

    const onLeftClick = (e) => {
        e.preventDefault();
        if (currentBanner === 0) {
            setCurrentBanner(2);
        } else {
            setCurrentBanner((prev) => prev - 1);
        }
    }

    const onRightClick = (e) => {
        e.preventDefault();
        if (currentBanner === 2) {
            setCurrentBanner(0);
        } else {
            setCurrentBanner((prev) => prev + 1);
        }
    }

    setInterval((e) => {
        onRightClick(e);
    }, 5000);

    return(
        <div className="carousel">
            <div className="carousel-screen">
                <img src={banners[currentBanner]} alt="banner1" />
                <div className="carousel-left" onClick={(e) => onLeftClick(e)}>
                    <LeftArrow />
                </div>
                <div className="carousel-right" onClick={(e) => onRightClick(e)}>
                    <RightArrow />
                </div>
            </div>
        </div>
    );
}