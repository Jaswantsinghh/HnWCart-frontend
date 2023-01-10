import { Header, Navbar, NavbarActions } from "../components/General";
import { Carousel } from "../components/Homepage";

export const Homepage = () => {
    return(
        <div className="homepage">
            <Header />
            <Navbar />
            <NavbarActions />
            <Carousel />
        </div>
    );
}