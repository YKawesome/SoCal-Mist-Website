import instaLogo from "../../assets/icons/instagram.svg";
import tiktokLogo from "../../assets/icons/tiktok.svg";
import mistLogo from "../../assets/icons/socal-mist-logo.png";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content p-10">
      <aside>
        <img src={mistLogo} alt="SoCal MIST Logo" className="w-40" />
        <p className="font-bold">
          SoCal MIST
          <br />
          Fostering Community for the Youth of this Ummah
        </p>
        <p>Est 2020</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <img src={instaLogo} alt="Instagram Logo" className="w-8" />
          </a>
          <a>
            <img src={tiktokLogo} alt="TikTok Logo" className="w-8" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
