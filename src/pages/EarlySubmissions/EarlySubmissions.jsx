import PageHeader from "../../components/PageHeader/PageHeader";
import ZipUploader from "../../components/ZipUploader/ZipUploader";

function EarlySubmissions() {
  return (
    <div>
      <PageHeader title="Early Submissions" />

      <div className="bg-base-200 py-10 px-4">
        <div className="w-[90%] mx-auto space-y-10 text-base-content">
          <div className="text-center">
            <div className="alert bg-primary border-0 shadow-lg justify-center">
              <span className="text-3xl p-3">
                Due Two Weeks Prior to Tournament
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Prepared Essay - Submit your Prepared Essay",
              "Short Fiction - Submit Short Fiction piece and written statement",
              "Poetry - Submit your Poetry piece",
              "Short Film - Submit an unlisted YouTube/Vimeo link",
              "Business Venture - Submit business venture outline",
              "Science Fair - Submit abstract",
              "Social Media - Submit link to media platform with typed statement",
              "Humanitarian Service - Submit campaign plan and crowdfunding link",
              "Digital Art - Artwork (JPG, TIFF, or PNG), artist statement (500 words max), 2+ drafts",
              "Photography - Photography Portfolio, artist statement (500 words max)",
            ].map((item, index) => (
              <div key={index} className="card bg-base-100 shadow-md transform transition duration-300 hover:scale-102 hover:bg-primary">
                <div className="card-body p-4 text-lg ">
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card bg-neutral text-neutral-content shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl">General Guidelines</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Typed and double spaced</li>
                <li>Size 12 font, Times New Roman</li>
                <li>
                  All submissions must be collected as ONE ZIP PDF FILE through
                  myMIST
                </li>
                <li>myMIST does NOT accept multiple files</li>
                <li>
                  A written statement is required unless stated otherwise –
                  include on a separate page at the end
                </li>
                <li>
                  Include a cover page with the title, MIST ID, and name of
                  competition
                </li>
                <li>
                  Do not include your name or any identifying markers on the
                  actual piece
                </li>
                <li>
                  Label file as:{" "}
                  <code className="bg-base-100 text-base-content px-1 rounded">
                    MISTID_COMPETITIONNAME
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary p-10">
        <h2 className="text-4xl font-semibold text-center mb-4">
          Submission Maker (zip)
        </h2>
        <p className="text-center text-md mb-6">
          Upload your files and generate a zip file for submission! <br/>This will automatically format your zip file name :)
        </p>
        <ZipUploader />
      </div>
    </div>
  );
}

export default EarlySubmissions;
