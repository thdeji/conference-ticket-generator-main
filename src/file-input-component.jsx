import { useState, useRef } from "react";

function FileInputType({ photo, setThumbnail }) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);


  // 1. Prevent default browser behavior (which is to open the file)
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // 2. Handle the drop
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const selectedFile = droppedFiles[0];
      setFile(selectedFile);
      
      // Sync the hidden input ref
      fileInputRef.current.files = droppedFiles;

      // Create the URL from the dropped file
      const url = URL.createObjectURL(selectedFile);
      setThumbnail(url);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile); // Updates local state
      
      // Create the URL from the specific file selected
      const url = URL.createObjectURL(selectedFile);
      setThumbnail(url); // Updates the parent state for other components
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current.click()} // Allow clicking to upload
      className={`font-Inconsolata-VariableFont border-2 border-dashed rounded-lg p-5 flex flex-col items-center justify-center cursor-pointer transition-colors 
        ${
          isDragging
            ? "border-blue-500 bg-blue-50/10"
            : "border-Neutral300/50 bg-Neutral700/50"
        }`}
    >
      {/* Hidden Native Input */}
      <input
        type="file"
        name={photo}
        id={photo}
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        accept="image/*"
        required
      />

      {file ? (
        <div className="flex flex-col gap-5">
          <img className="w-10 h-10 self-center border border-Neutral500 border-solid rounded-md" src={URL.createObjectURL(file)} alt="selected.img" />
          <div className="flex gap-2 self-center">
            <button className="underline bg-Neutral700 px-3 py-1 rounded-md text-Neutral300 cursor-pointer hover:bg-Neutral500">
              Remove image
            </button>
            <button className="bg-Neutral700 px-3 py-1 rounded-md text-Neutral300 cursor-pointer hover:bg-Neutral500">
              Change image
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 align-middle justify-center">
          <div className="bg-Neutral500/50 p-2 rounded-lg flex align-middle justify-center mx-25">
            <img src="/public/images/icon-upload.svg" alt="upload-icon" />
          </div>
          <p className="text-Neutral300">Drag & drop or click to upload</p>
        </div>
      )}
    </div>
  );
}
export default FileInputType;
