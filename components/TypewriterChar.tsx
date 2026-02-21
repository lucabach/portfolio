"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  speed?: number;   // ms per character
  delay?: number;   // ms before start
  className?: string;
  cursor?: boolean;
};

export default function TypewriterChar({
  text,
  speed = 25,
  delay = 0,
  className,
  cursor = true,
}: Props) {
  const [index, setIndex] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let interval: NodeJS.Timeout;

    const startTyping = () => {
      interval = setInterval(() => {
        setIndex((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    };

    const timeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <p className={className}>
      {text.slice(0, index)}
      {cursor && index < text.length && (
        <span className="animate-pulse ml-1">▌</span>
      )}
    </p>
  );
}