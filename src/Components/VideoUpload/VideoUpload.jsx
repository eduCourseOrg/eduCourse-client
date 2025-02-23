import { useState } from "react";

const VideoUpload = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Generate a temporary URL for the file
    const fileUrl = URL.createObjectURL(file);
    setVideoUrl(fileUrl);

    // Log file details
    console.log("File Name:", file.name);
    console.log("File Type:", file.type);
    console.log("Temporary Video URL:", fileUrl);
  };
  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileUpload} />
      {videoUrl && (
        <div>
          <p>Video Path: {videoUrl}</p>
          <video controls width="300">
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
