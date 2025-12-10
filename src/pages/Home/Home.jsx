import Landing from "./Landing";
import About from "./About";
import InfiniteCarousel from "./InfiniteCarousel";
import OurTeam from "./OurTeam";
import Sponsors from "./Sponsors";
import JoinUs from "./JoinUs";
import SignUp from "./SignUp";

function Home() {
    return (
        <>
            <Landing />
            <About />
            <InfiniteCarousel />
            <OurTeam />
            <JoinUs />
            <SignUp />
            <Sponsors />
        </>
    );
}

export default Home;