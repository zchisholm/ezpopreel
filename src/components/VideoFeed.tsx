// components/VideoFeed.tsx
"use client"
import { useState } from "react";
import VideoCard from "./VideoCard";

export default function VideoFeed() {
  const [videos] = useState([
    {
      id: 1,
      username: "@johnny_depp_21",
      caption: "Check out this cool video! #trending",
      videoUrl: "/video/Demo-Video-01.mp4",
      likes: 1234,
      comments: 89,
      shares: 45,
    },
    {
      id: 2,
      username: "@jimmy_neutron_42",
      caption: "Another amazing video! #viral",
      videoUrl: "/video/Demo-Video-02.mp4",
      likes: 2345,
      comments: 123,
      shares: 67,
    },
    {
      id: 2,
      username: "@skittles",
      caption: "Another amazing video! #viral",
      videoUrl: "/video/Demo-Video-03.mp4",
      likes: 2345,
      comments: 123,
      shares: 67,
    },
    {
      id: 2,
      username: "@pickle_rick",
      caption: "Another amazing video! #viral",
      videoUrl: "/video/Demo-Video-04.mp4",
      likes: 2345,
      comments: 123,
      shares: 67,
    },
  ]);

  return (
    <div className="pt-16 pb-20">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
