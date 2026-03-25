const GlobalBackgroundVideo = () => {
  return (
    <div className="video-bg-container" aria-hidden="true">
      <video 
        className="video-bg-content" 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="metadata"
      >
        <source src="/images/background_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default GlobalBackgroundVideo;
