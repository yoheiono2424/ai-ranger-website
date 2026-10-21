'use client';

import { useRef, useState } from 'react';

type SampleVideoProps = {
  src: string;
  poster: string;
  title: string;
};

const SampleVideo = ({ src, poster, title }: SampleVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStarted, setIsStarted] = useState(false);

  const handlePlay = () => {
    setIsStarted(true);
    videoRef.current?.play();
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={isStarted}
        playsInline
        preload="none"
        onPlay={() => setIsStarted(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* 再生前だけ、真ん中に大きな再生ボタンを出す */}
      {!isStarted && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`${title}を再生する`}
          className="group absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors duration-200"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-drama-gold/95 shadow-lg group-hover:scale-105 transition-transform duration-200">
            <svg className="ml-1 h-8 w-8 text-drama-bg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5.14v13.72a1 1 0 001.52.85l10.9-6.86a1 1 0 000-1.7L9.52 4.29A1 1 0 008 5.14z" />
            </svg>
          </span>
        </button>
      )}
    </>
  );
};

export default SampleVideo;
