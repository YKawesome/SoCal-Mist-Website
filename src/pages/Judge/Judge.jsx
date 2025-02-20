import PageHeader from "../../components/PageHeader/PageHeader";

function Judge() {
    return (
        <>
            <PageHeader title="Judge" />
            <div className="justify-items-center bg-[#C7D6E3] p-10">
                <iframe
                    title="judge"
                    style={{ width: "65%" }}
                    src="https://tinyurl.com/SoCalMIST2025Judge"
                    height="2993"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
            </div>
        </>
    )
}

export default Judge;
