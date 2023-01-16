import { LeftArrow, RightArrow } from "../../assets/icons";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import { useState } from "react";
import { useEffect } from "react";

export const Carousel = () => {

    const banners = [banner1, banner2, banner3];
    const [currentBanner, setCurrentBanner] = useState(0);

    const MINUTE_MS = 6000;

    useEffect(() => {
        const interval = setInterval(() => {
            onRightClick();
        }, MINUTE_MS);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    });

    const onLeftClick = (e) => {
        e.preventDefault();
        if (currentBanner < 3) {
            if (currentBanner === 0) {
                setCurrentBanner(2);
            } else {
                setCurrentBanner((prev) => prev - 1);
            }
        } else {
            setCurrentBanner(0);
        }
    }

    const onRightClick = () => {
        if (currentBanner < 3) {
            if (currentBanner === 2) {
                setCurrentBanner(0);
            } else {
                setCurrentBanner((prev) => prev + 1);
            }
        } else {
            setCurrentBanner(0);
        }
    }

    return(
        <div className="carousel">
            <div className="carousel-screen">
                <img src={banners[currentBanner]} alt="banner1" />
                <div className="carousel-left" onClick={(e) => onLeftClick(e)}>
                    <LeftArrow />
                </div>
                <div className="carousel-right" onClick={onRightClick}>
                    <RightArrow />
                </div>
            </div>
        </div>
    );
}