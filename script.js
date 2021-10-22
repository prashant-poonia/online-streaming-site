const handleVideoSrc = (videoContainerId, videoSrc) => {
  const video = document.getElementById(videoContainerId);
  const source = document.getElementById(`${videoContainerId}-source`);
  source.setAttribute("src", videoSrc);
  video.load();
};
