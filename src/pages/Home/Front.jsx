import mistLogo from "../../assets/images/socal-mist-big.png";
import bg from "../../assets/images/background2024.jpg";
import "./Home.css"

function Front() {
  return (
    <div
      class="hero h-[92vh]"
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
            className="w-100 self-center"
          />
          <div className="h-[45vh]"></div>
          <div className="max-w-md">
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
            {/* <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
              </p> */}
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
