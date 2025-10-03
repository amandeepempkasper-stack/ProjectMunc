// import { useState, useRef, useEffect } from "react";
// import {
//   FaPlay,
//   FaPause,
//   FaExpand,
//   FaCompress,
//   FaVolumeMute,
//   FaVolumeUp,
// } from "react-icons/fa"; // Import icons

// const VideoPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showControls, setShowControls] = useState(false);
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           videoRef.current?.play();
//           setIsPlaying(true);
//         } else {
//           videoRef.current?.pause();
//           setIsPlaying(false);
//         }
//       },
//       { threshold: 0.5 } // Adjust threshold for sensitivity
//     );

//     if (videoRef.current) {
//       observer.observe(videoRef.current);
//     }

//     return () => {
//       if (videoRef.current) {
//         observer.unobserve(videoRef.current);
//       }
//     };
//   }, []);

//   const handleTogglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleToggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const handleToggleFullscreen = () => {
//     if (containerRef.current) {
//       if (!isFullscreen) {
//         if (containerRef.current.requestFullscreen) {
//           containerRef.current.requestFullscreen();
//         } else if (containerRef.current.webkitRequestFullscreen) {
//           containerRef.current.webkitRequestFullscreen();
//         } else if (containerRef.current.mozRequestFullScreen) {
//           containerRef.current.mozRequestFullScreen();
//         } else if (containerRef.current.msRequestFullscreen) {
//           containerRef.current.msRequestFullscreen();
//         }
//       } else {
//         if (document.exitFullscreen) {
//           document.exitFullscreen();
//         } else if (document.webkitExitFullscreen) {
//           document.webkitExitFullscreen();
//         } else if (document.mozCancelFullScreen) {
//           document.mozCancelFullScreen();
//         } else if (document.msExitFullscreen) {
//           document.msExitFullscreen();
//         }
//       }
//       setIsFullscreen(!isFullscreen);
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="video-wrapper position-relative my-2"
//       onMouseEnter={() => setShowControls(true)}
//       onMouseLeave={() => setShowControls(false)}
//     >
//       {/* Video */}
//       <video
//         ref={videoRef}
//         className="rounded-3"
//         width="100%"
//         height="auto"
//         loop
//         muted={isMuted}
//         playsInline
//         onClick={handleTogglePlay}
//         style={{ border: "10px solid rgba(228, 226, 226, 0.6)" }}
//       >
//         <source
//           src="https://res.cloudinary.com/dv8c2pofx/video/upload/v1742213289/muncVideo/MUN-C_Video_1_qrstgv.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

//       {/* Play/Pause Button */}
//       {showControls && (
//         <button
//           className="control-button play-button"
//           onClick={handleTogglePlay}
//         >
//           {isPlaying ? (
//             <FaPause className="fs-3" color="white" />
//           ) : (
//             <FaPlay className="fs-3" color="white" />
//           )}
//         </button>
//       )}

//       {/* Mute/Unmute Button */}
//       {showControls && (
//         <button
//           className="control-button mute-button p-1"
//           onClick={handleToggleMute}
//         >
//           {isMuted ? (
//             <FaVolumeMute className="fs-5" color="white" />
//           ) : (
//             <FaVolumeUp className="fs-5" color="white" />
//           )}
//         </button>
//       )}

//       {/* Fullscreen Toggle Button */}
//       {showControls && (
//         <button
//           className="control-button fullscreen-button p-1"
//           onClick={handleToggleFullscreen}
//         >
//           {isFullscreen ? (
//             <FaCompress className="fs-5" color="white" />
//           ) : (
//             <FaExpand className="fs-5" color="white" />
//           )}
//         </button>
//       )}

//       <style>
//         {`
//           .video-wrapper {
//             position: relative;
//             display: inline-block;
//             width: 100%;
//           }

//           .control-button {
//             position: absolute;
//             background: rgba(25, 99, 236, 0.8);
//             border: none;
//             border-radius: 50%;
//             width: 50px;
//             height: 50px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             cursor: pointer;
//             transition: background 0.3s;
//           }

//           .control-button:hover {
//             background: rgba(0, 0, 0, 0.8);
//           }

//           .play-button {
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//           }

//           .mute-button {
//             bottom: 20px;
//             left: 20px;
//           }

//           .fullscreen-button {
//             bottom: 20px;
//             right: 20px;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default VideoPlayer;





import { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa"; // Import icons

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Set muted to true for autoplay
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Ensure the video is muted for autoplay
    video.muted = isMuted;

    // Try to play the video and handle potential errors
    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Autoplay was prevented:", error);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 } // Adjust threshold for sensitivity
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isMuted]);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => console.error("Play error:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleToggleFullscreen = () => {
    if (containerRef.current) {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen();
        } else if (containerRef.current.webkitRequestFullscreen) {
          containerRef.current.webkitRequestFullscreen();
        } else if (containerRef.current.mozRequestFullScreen) {
          containerRef.current.mozRequestFullScreen();
        } else if (containerRef.current.msRequestFullscreen) {
          containerRef.current.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div
      ref={containerRef}
      className="video-wrapper position-relative my-2"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="rounded-3"
        width="100%"
        height="auto"
        loop
        playsInline
        muted={isMuted} // Keep it muted for autoplay
        onClick={handleTogglePlay}
        style={{ border: "10px solid rgba(228, 226, 226, 0.6)" }}
      >
        <source
          src="https://res.cloudinary.com/dv8c2pofx/video/upload/v1742213289/muncVideo/MUN-C_Video_1_qrstgv.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      {showControls && (
        <button
          className="control-button play-button"
          onClick={handleTogglePlay}
        >
          {isPlaying ? (
            <FaPause className="fs-3" color="white" />
          ) : (
            <FaPlay className="fs-3" color="white" />
          )}
        </button>
      )}

      {/* Mute/Unmute Button */}
      {showControls && (
        <button
          className="control-button mute-button p-1"
          onClick={handleToggleMute}
        >
          {isMuted ? (
            <FaVolumeMute className="fs-5" color="white" />
          ) : (
            <FaVolumeUp className="fs-5" color="white" />
          )}
        </button>
      )}

      {/* Fullscreen Toggle Button */}
      {showControls && (
        <button
          className="control-button fullscreen-button p-1"
          onClick={handleToggleFullscreen}
        >
          {isFullscreen ? (
            <FaCompress className="fs-5" color="white" />
          ) : (
            <FaExpand className="fs-5" color="white" />
          )}
        </button>
      )}

      <style>
        {`
          .video-wrapper {
            position: relative;
            display: inline-block;
            width: 100%;
          }

          .control-button {
            position: absolute;
            background: rgba(25, 99, 236, 0.8);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.3s;
          }

          .control-button:hover {
            background: rgba(0, 0, 0, 0.8);
          }

          .play-button {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .mute-button {
            bottom: 20px;
            left: 20px;
          }

          .fullscreen-button {
            bottom: 20px;
            right: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default VideoPlayer;
