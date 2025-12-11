import JSZip from "jszip";
import { useRef, useState } from "react";

function ZipUploader() {
  const fileInputRef = useRef(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [mistId, setMistId] = useState("");
  const [competitionName, setCompetitionName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleZipCreation = async () => {
    setErrorMessage("");
    const files = fileInputRef.current.files;
    if (!mistId.trim() || !competitionName.trim() || !files.length) {
      setErrorMessage("Please fill in MIST ID, Competition Name, and select at least one file.");
      return;
    }

    const zip = new JSZip();
    for (const file of files) {
      zip.file(file.name, file);
    }

    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
  };

  return (
    <div className="shadow-xl card bg-base-200">
      <div className="card-body">
        <h3 className="mb-4 text-2xl card-title text-primary">Submission Zipper Tool</h3>
        <p className="mb-4 text-md">Use this tool to bundle your files into a single ZIP file correctly named for myMIST.</p>
        
        <fieldset className="w-full fieldset">
          <label className="fieldset-label">MIST ID</label>
          <input
            type="text"
            className="w-full input"
            placeholder="e.g. 123-456"
            value={mistId}
            onChange={(e) => setMistId(e.target.value)}
          />
          
          <label className="mt-4 fieldset-label">Competition Name</label>
          <input
            type="text"
            className="w-full input"
            placeholder="e.g. Short Fiction"
            value={competitionName}
            onChange={(e) => setCompetitionName(e.target.value)}
          />
          
          <label className="mt-4 fieldset-label">Upload Submission Files</label>
          <input
            id="zip-file-input"
            type="file"
            className={`file-input w-full ${
              errorMessage ? 'file-input-error' : downloadUrl ? 'file-input-success' : 'file-input-neutral'
            }`}
            multiple
            ref={fileInputRef}
          />
          
          <button onClick={handleZipCreation} className="w-full mt-6 btn btn-primary">
            Generate ZIP
          </button>
        </fieldset>

        {errorMessage && (
          <div role="alert" className="mt-4 alert alert-error">
            <span>{errorMessage}</span>
          </div>
        )}

        {downloadUrl && (
          <div role="alert" className="mt-4 alert alert-success">
            <span>
              ZIP Ready!{" "}
              <a
                href={downloadUrl}
                download={`${mistId.toUpperCase()}_${competitionName.replace(/\s+/g, '').toUpperCase()}.zip`}
                className="font-bold underline hover:text-white"
              >
                Click here to download
              </a>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ZipUploader;
