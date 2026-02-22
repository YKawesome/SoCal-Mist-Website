import logo from "../../assets/icons/socal-mist-logo-white.png";
import instaLogo from "../../assets/icons/instagram.svg";
import tiktokLogo from "../../assets/icons/tiktok.svg";
import threadsLogo from "../../assets/icons/threads.svg";
import emailLogo from "../../assets/icons/email.svg";

export default function Footer() {
  return (
    <footer className="p-10 footer footer-horizontal footer-center bg-neutral text-neutral-content">
      <aside className="">
        <img src={logo} alt="SoCal MIST Logo" className="w-24 mb-2" />
        <p className="font-bold">
          SoCal MIST
          <br />
          Fostering Community for the Youth of this Ummah
        </p>
        <p>Est. 2020</p>
      </aside>
      <nav>
        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/socalmist/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={instaLogo} alt="Instagram" className="w-7 h-7 brightness-0 invert" />
          </a>
          <a
            href="https://www.threads.net/@socalmist"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={threadsLogo} alt="Threads" className="w-7 h-7 brightness-0 invert" />
          </a>
          <a
            href="https://www.tiktok.com/@socal.mist"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={tiktokLogo} alt="TikTok" className="w-7 h-7 brightness-0 invert" />
          </a>
          <a
            href="mailto:socal@getmistified.com"
            className="transition-transform hover:scale-110"
          >
            <img src={emailLogo} alt="Email" className="w-7 h-7 brightness-0 invert" />
          </a>
        </div>
      </nav>

    </footer>
  );
}
