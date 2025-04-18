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
    <div className="space-y-4 max-w-md mx-auto px-4">
      <fieldset className="fieldset">
        <input
          type="text"
          className="input input-bordered w-full mb-2"
          placeholder="Enter MIST ID"
          value={mistId}
          onChange={(e) => setMistId(e.target.value)}
        />
        <input
          type="text"
          className="input input-bordered w-full mb-2"
          placeholder="Enter Competition Name"
          value={competitionName}
          onChange={(e) => setCompetitionName(e.target.value)}
        />
        <label htmlFor="zip-file-input" className="label font-bold mb-1">Upload Submission Files</label>
        <input
          id="zip-file-input"
          type="file"
          className={`file-input file-input-bordered w-full ${
            errorMessage ? 'file-input-error' : downloadUrl ? 'file-input-success' : 'file-input-neutral'
          }`}
          multiple
          ref={fileInputRef}
        />
        <button onClick={handleZipCreation} className="btn btn-secondary mt-2">
          Generate ZIP
        </button>
      </fieldset>

      {errorMessage && (
        <div className="alert alert-error">
          <span>{errorMessage}</span>
        </div>
      )}

      {downloadUrl && (
        <div className="alert alert-success mt-4">
          <span>
            ZIP Ready!{" "}
            <a
              href={downloadUrl}
              download={`${mistId.toUpperCase()}_${competitionName.replace(/\s+/g, '').toUpperCase()}.zip`}
              className="underline font-bold"
            >
              Click here to download
            </a>
          </span>
        </div>
      )}
    </div>
  );
}

export default ZipUploader;