"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CYCLE_MS = 500;

export function CourseHeroGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setFrame((f) => (f + 1) % images.length),
      CYCLE_MS,
    );
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-white/5 lg:aspect-auto lg:h-full">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          fill
          sizes="(max-width: 1024px) 100vw, 41vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-100 ${
            i === frame ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
