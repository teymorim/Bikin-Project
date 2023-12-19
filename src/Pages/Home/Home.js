import About from "../../Components/homecomponent/About/About";
import Features from "../../Components/homecomponent/Features/Features";
import HeadHome from "../../Components/homecomponent/HeadHome/HeadHome";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import Services from "../../Components/homecomponent/Services/Services"
import Portfolio from "../../Components/homecomponent/Portfolio/Portfolio";
import Testimonials from "../../Components/homecomponent/Testimonials/Testimonials";
import Team from "../../Components/homecomponent/Team/Team";
import Pricing from "../../Components/homecomponent/Pricing/Pricing";
import Contact from "../../Components/homecomponent/Contact/Contact";
import MyFooter from "../../Components/MyFooter/MyFooter";

function Home(){
    return(
        <>
            <MyNavbar />
            <HeadHome />
            <About />
            <Features />
            <Services />
            <Portfolio />
            <Testimonials />
            <Team />
            <Pricing />
            <Contact />
            <MyFooter />
        </>
    )
}
export default Home;