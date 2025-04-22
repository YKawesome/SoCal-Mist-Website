import ReactPlayer from "react-player";
import PageHeader from "../../components/PageHeader/PageHeader";
import PricingTable from "./PricingTable";

function Registration() {
    return (
        <>
            <PageHeader title="Registration" />
            <div className="hero bg-base-200 h-full p-6">
                <div className="hero-content text-center">
                    <div className="lg:max-w-lg max-w-md">
                        <h1 className="text-2xl font-bold">
                            How Registration Works
                        </h1>
                        <p className="py-6">
                            Registration for SoCal MIST is open to all high school students, including those from schools, independent competitors, and guests. We offer both online and on-site registration options. Our outreach and registration committee is available to assist with the process and answer any questions.
                        </p>
                        <a href="https://my.getmistified.com/" target="_blank" className="btn btn-primary btn-xl">
                            Register Now!
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 h-full py-10 items-center">
                <div className="card card-xl bg-base-200 lg:w-4xl sm:w-xl w-sm shadow-lg place-self-center">
                    <div className="card-body">
                        <h2 className="card-title pb-3">Pricing</h2>
                        <PricingTable />
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-secondary-content h-full justify-items-center p-10">
                <div className="text-center w-full">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-4xl font-bold">
                            How to Register
                        </h1>
                        {/* https://youtu.be/DvZVUkiqECI */}
                        {/* <iframe
                            width="800"
                            height="450"
                            src="https://www.youtube.com/embed/DvZVUkiqECI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe> */}
                        <div className="video-container">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=DvZVUkiqECI"
                                controls
                                width="100%"
                                height="100%"
                            />
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;