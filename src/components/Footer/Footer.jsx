import images from "../../utils/preloadimages";

function Footer() {
  const mistLogo = images["socal-mist-logo.png"];
  const instaLogo = images["instagram.svg"];
  const tiktokLogo = images["tiktok.svg"];
  const emailLogo = images["email.svg"];
  const threadsLogo = images["threads.svg"];

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
          <a className="btn btn-xl btn-ghost btn-square p-1" href="https://www.instagram.com/socalmist/" target="_blank">
            <img src={instaLogo} alt="Instagram Logo" className="w-20" />
          </a>
          <a className="btn btn-xl btn-ghost btn-square p-1" href="https://socalmist.com/contact/tiktok" target="_blank">
            <img src={tiktokLogo} alt="TikTok Logo" className="w-20" />
          </a>
          <a className="btn btn-xl btn-ghost btn-square p-1" href="mailto:socal@getmistified.com" target="_blank">
            <img src={emailLogo} alt="Instagram Logo" className="w-20" />
          </a>
          <a className="btn btn-xl btn-ghost btn-square p-1" href="https://www.threads.net/@socalmist" target="_blank">
            <img src={threadsLogo} alt="Threads Logo" className="w-20" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
