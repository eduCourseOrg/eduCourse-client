import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  if (!url) {
    return <p>No video available</p>;
  }
  console.log(url, "url in videoplayer");
  return (
    <div className="w-full h-full">
      <ReactPlayer url={url} controls width="100%" height="100%" />
    </div>
  );
};
VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired, // url must be a string and required
};
export default VideoPlayer;
