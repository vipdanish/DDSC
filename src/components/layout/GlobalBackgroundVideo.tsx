const GlobalBackgroundVideo = () => {
  return (
    <div className="bg-video-wrap" aria-hidden="true">
      <video 
        className="bg-video" 
        autoPlay 
        muted 
        loop 
        playsInline 
        preload="metadata"
      >
        <source src="/images/background_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-video-overlay"></div>
    </div>
  );
};

export default GlobalBackgroundVideo;
