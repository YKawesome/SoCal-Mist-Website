import mistLogo from "../../assets/images/socal-mist-big.png";
import images from "../../utils/preloadimages";
import "./Home.css"
import { Link } from "react-router-dom";

function Front() {
  const bg = images["background2024.jpg"];
  return (
    <div
      className="hero h-[92vh]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >

      <div className="hero-overlay"></div>
      {/* <div className="fade-to-black"></div> */}
      <div className="hero-content text-neutral-content text-center h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <img
              src={mistLogo}
              alt="SoCal MIST Logo"
              className="w-lg self-center p-8 rounded-box"
            />
            <h1 className="text-5xl font-bold glass shadow-2xl w-fit place-self-center p-7 rounded-xl text-primary">
              June 28-29th @ ISOC
            </h1>
          </div>
          <div className="max-w-md self-center mb-10">

            <Link to="/registration" className="btn btn-primary w-60 h-20 text-2xl">
              Register Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
