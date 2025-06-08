import AboutUs from "./AboutUs";
import Front from "./Front";
import GetInvolved from "./GetInvolved";
import ImageRowOne from "./ImageRowOne";
import ImageRowTwo from "./ImageRowTwo";
import MistTheme from "./MistTheme";
import OurSponsors from "./OurSponsors";
import OurTeam from "./OurTeam";
import SignUp from "./SignUp";

function Home() {
  return (
    <>
      <Front />
      <AboutUs />
      <ImageRowOne />
      <OurTeam />
      <MistTheme />
      <GetInvolved />
      <ImageRowTwo />
      <OurSponsors />
      <SignUp />
    </>
  );
}

export default Home;
