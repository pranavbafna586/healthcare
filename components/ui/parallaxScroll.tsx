"use client";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import { JSX, Key, useRef, useState, useEffect } from "react";

interface Tweet {
  username: string;
  handle: string;
  content: string;
  avatar: string;
}

const SCROLL_SPEED = 0.5;

const TweetComponent = ({ username, handle, content, avatar }: Tweet) => (
  <div className="bg-gray-800 rounded-xl p-4 mb-4 w-[250px]">
    <div className="flex items-center mb-2">
      <img
        src={avatar}
        alt={username}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <p className="font-bold text-white">{username}</p>
        <p className="text-gray-400">@{handle}</p>
      </div>
    </div>
    <p className="text-white">{content}</p>
  </div>
);

interface InfiniteMovingCardsProps {
  tweets: Tweet[];
  direction?: "up" | "down";
  speed?: number;
}

const InfiniteMovingCards = ({ tweets, direction = "up", speed = SCROLL_SPEED }: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalHeight = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      totalHeight.current = containerRef.current.scrollHeight / 2;
    }
  }, [tweets]);

  useAnimationFrame((t) => {
    const yPos = (t * speed) % totalHeight.current;
    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(${
        direction === "down" ? yPos : -yPos
      }px)`;
    }
  });

  return (
    <div className="overflow-hidden relative h-[400px]">
      <div ref={containerRef} className="flex flex-col gap-4">
        {tweets.concat(tweets).map((tweet: JSX.IntrinsicAttributes & Tweet, idx: Key | null | undefined) => (
          <TweetComponent key={idx} {...tweet} />
        ))}
      </div>
    </div>
  );
};

interface ParallaxScrollProps {
  tweets: Tweet[];
}

export const ParallaxScroll = ({ tweets }: ParallaxScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-#265973" ref={containerRef}>
      <div className="max-w-6xl mx-auto py-20 px-4">        
        <div className="h-[600px] overflow-hidden bg-transparent rounded-xl">
          <div className="flex justify-between items-start gap-10 p-10">
            <motion.div style={{ y: y1 }} className="w-1/3">
              <InfiniteMovingCards tweets={tweets.slice(0, 3)} direction="up" speed={0.1} />
            </motion.div>
            <motion.div style={{ y: y2 }} className="w-1/3">
            <InfiniteMovingCards tweets={tweets.slice(3, 6)} direction="up" speed={0.11} />
            </motion.div>
            <motion.div style={{ y: y3 }} className="w-1/3">
              <InfiniteMovingCards tweets={tweets.slice(6, 9)} direction="up" speed={0.112} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
