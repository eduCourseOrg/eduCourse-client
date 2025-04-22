// import { useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

const VideoUpload = () => {
  console.log(ffmpeg, "ffmeg");
  console.log(fetchFile, "fetchFile");
  // const [videoId, setVideoId] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const handleUpload = async (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  //   setLoading(true);
  //   if (!ffmpeg.isLoaded()) {
  //     await ffmpeg.load();
  //   }
  //   //load the video file into ffmpeg
  //   ffmpeg.FS("writeFile", "input.mp4", await fetchFile(file));

  //   // Compress the video (adjust parameters for better quality/size)
  //   await ffmpeg.run(
  //     "-i",
  //     "input.mp4",
  //     "-vcodec",
  //     "libx264",
  //     "-crf",
  //     "28", // Adjust CRF (lower = better quality, bigger size)
  //     "-preset",
  //     "fast",
  //     "output.mp4"
  //   );

  //   // Get the compressed video file
  //   const data = ffmpeg.FS("readFile", "output.mp4");
  //   const compressedBlob = new Blob([data.buffer], { type: "video/mp4" });

  //   // Convert to Base64 for uploading
  //   const reader = new FileReader();
  //   reader.readAsDataURL(compressedBlob);
  //   reader.onloadend = async () => {
  //     const base64Video = reader.result.split(",")[1]; // Extract Base64 content

  //     // Send Base64 to the backend
  //     // const response = await fetch("http://localhost:5000/videos/upload", {
  //     //   method: "POST",
  //     //   headers: { "Content-Type": "application/json" },
  //     //   body: JSON.stringify({ video: base64Video, filename: file.name }),
  //     // });
  //     // const data = await response.json();
  //     // console.log("Uploaded Video ID:", data.id);
  //     // setVideoId(data.id);
  //     // setLoading(false);
  //     console.log(base64Video, "base64Video");
  //   };
  // };
  return (
    <div>
      <h1 className="text-xl font-bold text-center text-primary mb-4">
        Upload Your Video
      </h1>
      <label className="border-2 border-primary p-4 cursor-pointer flex items-center gap-x-4">
        <span className="bg-primary text-white px-4 py-2 rounded-md">
          Choose File
        </span>
        <span className="text-gray-500">No file chosen</span>
        <input
          type="file"
          accept="video/*"
          className="hidden"
          // onChange={handleUpload}
        />
        {/* {loading && <p>Compressing & Uploading...</p>} */}
        {/* {videoId && <p>Video Uploaded! ID: {videoId}</p>} */}
      </label>
    </div>
  );
};

export default VideoUpload;
