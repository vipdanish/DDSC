import { useEffect, useRef } from 'react';
import { getAssetPath } from "@/lib/utils";

const GlobalBackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="video-bg-container" aria-hidden="true">
      <video 
        ref={videoRef}
        className="video-bg-content" 
        muted 
        loop 
        playsInline
        poster={getAssetPath("images/ssiems-campus.webp")}
      >
        <source src={getAssetPath("images/background_video.mp4")} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default GlobalBackgroundVideo;
