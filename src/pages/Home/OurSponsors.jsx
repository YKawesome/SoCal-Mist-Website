import images from "../../utils/preloadimages";

function OurSponsors() {
    const cair = images["cair.png"];
    const yss = images["yss.png"];
    const irusa = images["irusa.png"];
    const mpac = images["mpac.png"];

    return (
        <>
            <div className="bg-neutral text-neutral-content my-8">
                <h1 className="lg:text-7xl text-6xl font-bold text-center mb-5">Our Sponsors</h1>
                <div className="container grid grid-cols-1 gap-2 mx-auto md:grid-cols-2">
                    <div className="p-2">
                        <div className="card bordered shadow-lg h-full flex flex-col bg-base-300">
                            <figure className="p-8 flex-grow">
                                <img src={cair} alt="cair" className="object-cover w-full h-full" />
                            </figure>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card bordered shadow-lg h-full flex flex-col bg-base-300">
                            <figure className="p-8 flex-grow">
                                <img src={yss} alt="yss" className="object-cover w-full h-full" />
                            </figure>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card bordered shadow-lg h-full flex flex-col bg-base-300">
                            <figure className="p-8 flex-grow">
                                <img src={irusa} alt="irusa" className="object-cover w-full h-full" />
                            </figure>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="card bordered shadow-lg h-full flex flex-col bg-base-300">
                            <figure className="p-15 flex-grow">
                                <img src={mpac} alt="mpac" className="object-cover w-full h-full" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurSponsors;