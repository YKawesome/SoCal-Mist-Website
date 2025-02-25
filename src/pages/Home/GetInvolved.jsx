import { Link } from "react-router-dom";

function GetInvolved() {
    return (
        <>
            <div className="hero bg-base-300 h-full p-8">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="lg:text-7xl text-6xl font-bold mb-8">Get Involved</h1>
                        <div className="join">
                            <Link to="/judge" className="btn btn-xl btn-secondary join-item">Judge</Link>
                            <Link to="/volunteer" className="btn btn-xl btn-secondary join-item">Volunteer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetInvolved;