import Landing from "./Landing";
import About from "./About";
import InfiniteCarousel from "./InfiniteCarousel";
import OurTeam from "./OurTeam";
import Sponsors from "./Sponsors";
import JoinUs from "./JoinUs";

function Home() {
    return (
        <>
            <Landing />
            <About />
            <InfiniteCarousel />
            <OurTeam />
            <Sponsors />
            <JoinUs />
        </>
    );
}

export default Home;