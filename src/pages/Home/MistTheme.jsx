import images from "../../utils/preloadimages";
import { Link } from "react-router-dom";

function MistTheme() {
    const themeImage = images["2025theme.png"];
    return (
        <>
            <div
                className="hero lg:h-[90vh] h-[50vh]"
                style={{
                    backgroundImage: `url(${themeImage})`,
                }}>
                <div className="hero-content text-neutral-content text-center flex flex-col h-full">
                    <div className="max-w-md mt-auto lg:mb-20 sm:mb-8 mb-4">
                        <div className="join">
                            <Link to="/theme" className="btn btn-xl btn-primary join-item">Theme</Link>
                            <a href="https://www.getmistified.com/news/2024/11/20/2025-competitions-rulebook" target="_blank" className="btn btn-xl btn-primary join-item">Rulebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MistTheme;