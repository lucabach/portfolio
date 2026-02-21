"use client";

import { useEffect, useState } from "react";

type Props = {
  images: string[];
  interval?: number; // ms
  opacity?: number;  // 0 → 1
};

export default function BackgroundSlideshow({
  images,
  interval = 3000,
  opacity = 0.25,
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
          style={{ opacity: i === index ? opacity : 0 }}
        />
      ))}

      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}