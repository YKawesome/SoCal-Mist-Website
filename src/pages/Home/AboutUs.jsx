import images from "../../utils/preloadimages";
import { Link } from "react-router-dom";

function AboutUs() {
    const aboutUsImage = images["aboutusimage.png"];
    return (
        <>
            <div className="hero bg-neutral text-neutral-content h-full p-6">
                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <img
                        src={aboutUsImage}
                        className="lg:max-w-xl md:max-w-md max-w-xs rounded-lg shadow-md" />
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">
                            At MIST, we empower high school students through engaging competitions that fuse educational pursuits with Islamic values. Our vibrant community welcomes diverse talents to express themselves, innovate, and excel across a spectrum of disciplines. From fostering leadership and communication skills to inspiring a creative and collaborative spirit, MIST is dedicated to nurturing the next generation of thinkers, leaders, and change-makers. Join us on this transformative journey to celebrate knowledge, unity, and growth.
                        </p>
                        <Link to="about" className="btn btn-xl btn-base-200">Learn More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;