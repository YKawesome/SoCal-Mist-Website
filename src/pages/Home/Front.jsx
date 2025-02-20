import mistLogo from "../../assets/images/socal-mist-big.png";
import images from "../../utils/preloadimages";
import "./Home.css"

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
      <div className="hero-content text-neutral-content text-center">
        <div className="flex flex-col">
          <img
            src={mistLogo}
            alt="SoCal MIST Logo"
            className="w-lg self-center p-8 rounded-box"
          />
          <div className="h-[37vh]"></div>
          <div className="max-w-md self-center">

            <button className="btn btn-primary w-60 h-20 text-2xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Front;
