import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Skills from "./skills";
import Footer from "./footer";
import AboutMe from "./aboutme";


const main: React.FC = () => {
    return (
        <div className="bg-gray-500">

            <Nav/>
            <Hero/>
            <AboutMe/>
            <Project/>
            <Skills/>
            <Footer/>

        </div>
    );
}

export default main;