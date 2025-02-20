import PageHeader from "../../components/PageHeader/PageHeader";

function Sponsor() {
    return (
        <>
            <PageHeader title="Sponsor" />
            <div className="hero bg-base-200 h-full p-6">
                <div className="hero-content text-center">
                    <div className="lg:max-w-lg max-w-md">
                        <h1 className="text-2xl font-bold">
                            Interested in sponsoring MIST?
                        </h1>
                        <p className="py-6">
                            SoCal MIST offers the unique opportunity to highlight your organization to a diverse audience of Muslim community members including community leaders, parents, young professionals, and most importantly - the YOUTH.
                        </p>
                        <p className="pb-6 font-bold">
                        If you would like to view our sponsorship package, please email us at socal@getmistified.com.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsor;