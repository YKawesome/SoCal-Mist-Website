import PageHeader from "../../components/PageHeader/PageHeader";
import images from "../../utils/preloadimages";

function Donate() {
    const donateImage = images["donateimage.png"];
    return (
        <>
            <PageHeader title="Donate" />
            <div
                class="hero h-[60vh]"
                style={{
                    backgroundImage: `url(${donateImage})`,
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donate;