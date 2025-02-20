import PageHeader from "../../components/PageHeader/PageHeader";

function Volunteer() {
    return (
        <>
            <PageHeader title="Volunteer" />
            <div className="justify-items-center bg-[#FCDDAB] p-10">
                <iframe
                    title="judge"
                    style={{ width: "65%" }}
                    src="https://tinyurl.com/SoCalMIST2025Volunteer"
                    height="2993"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
            </div>
        </>
    )
}

export default Volunteer;
