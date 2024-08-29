"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import { images } from "@/constants";

export function ImagesSliderDemo() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          console.log("Audio is playing");
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
  };
  return (
    <ImagesSlider className="h-[46rem] " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-2xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Happy Birthday <br /> Jenny!
        </motion.p>
        <audio ref={audioRef} src="/so beautiful, with you.mp3" />

        <button
          onClick={handlePlay}
          className="px-[10px] py-[6px] text-[0.6em] font-semibold md:px-4 md:py-2 md:text-[0.75em] rounded-full text-[#fff6fb] tracking-[0.2em] text-shadow-md bg-transparent border-2 border-emerald-500/20 shadow-[0_0_0px_1px_#10B981,0_0_10px_1px_#10B981,inset_0_0_0px_1px_#10B981,inset_0_0_10px_1px_#10B981] transition-all duration-100 hover:shadow-[0_0_0px_1px_#10B981,0_0_10px_2px_#10B981,inset_0_0_0px_1px_#10B981,inset_0_0_30px_2px_#10B981] hover:text-shadow-[0_0_10px_#10B981] hover:-translate-y-1 active:shadow-[0_0_0px_1px_#10B981,0_0_25px_1px_#10B981,inset_0_0_0px_1px_#10B981,inset_0_0_30px_1px_#10B981] active:translate-y-[1px]"
        >
          PLAY SONG
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
