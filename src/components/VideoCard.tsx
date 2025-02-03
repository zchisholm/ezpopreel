// components/VideoCard.tsx
import { useState, useRef, useEffect } from "react";
import { Heart, MessageCircle, Share2, VolumeX, Volume2 } from "lucide-react";

interface VideoCardProps {
  video: {
    id: number;
    username: string;
    caption: string;
    videoUrl: string;
    likes: number;
    comments: number;
    shares: number;
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Setup Intersection Observer to auto-play when video is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
          videoRef.current?.play();
        } else {
          setIsPlaying(false);
          videoRef.current?.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full max-w-screen-md mx-auto mb-4 bg-gray-900 rounded-lg overflow-hidden">
      <div className="aspect-[9/16] relative">
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onClick={togglePlay}
        />

        {/* Play/Pause overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="p-4 rounded-full bg-black/50 hover:bg-black/70 transition-opacity opacity-0 hover:opacity-100"
            onClick={togglePlay}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
        </div>

        {/* Volume control */}
        <button
          className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50"
          onClick={toggleMute}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="font-bold">{video.username}</h3>
        <p className="text-sm text-gray-300">{video.caption}</p>
      </div>

      <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-4">
        <button className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
            <Heart size={24} />
          </div>
          <span className="text-xs mt-1">{video.likes}</span>
        </button>

        <button className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
            <MessageCircle size={24} />
          </div>
          <span className="text-xs mt-1">{video.comments}</span>
        </button>

        <button className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
            <Share2 size={24} />
          </div>
          <span className="text-xs mt-1">{video.shares}</span>
        </button>
      </div>
    </div>
  );
}
