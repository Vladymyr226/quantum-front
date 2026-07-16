"use client";

import { useCallback, useRef, useState } from "react";

/**
 * ImageTrail — a cursor-follow "image trail" effect.
 *
 * As the pointer moves across the container, photos spawn at the cursor,
 * pop in, then shrink and fade out (see the `trail-pop` keyframe in globals.css),
 * cycling through the `images` list. The trail sits behind `children` and never
 * intercepts pointer events, so links/inputs inside stay usable.
 *
 * Pure React + CSS — no animation library. Touch devices don't fire the
 * continuous pointermove that drives the trail, so it stays a desktop flourish.
 */

type TrailImage = {
  id: number;
  x: number;
  y: number;
  src: string;
  rotate: number;
};

const SPAWN_DISTANCE = 48; // px of pointer travel between spawns
const MAX_ITEMS = 40; // safety cap so a fast sweep can't pile up nodes

export function ImageTrail({
  images,
  className,
  children,
}: {
  images: string[];
  className?: string;
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<TrailImage[]>([]);
  const idRef = useRef(0);
  const seqRef = useRef(0);
  const lastRef = useRef<{ x: number; y: number } | null>(null);
  const preloadedRef = useRef(false);

  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // Warm the browser cache on first interaction so trail photos never flash.
      if (!preloadedRef.current) {
        preloadedRef.current = true;
        images.forEach((src) => {
          const img = new window.Image();
          img.src = src;
        });
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const last = lastRef.current;
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        if (dx * dx + dy * dy < SPAWN_DISTANCE * SPAWN_DISTANCE) return;
      }
      lastRef.current = { x, y };

      const src = images[seqRef.current % images.length];
      seqRef.current += 1;
      const id = idRef.current++;
      const rotate = Math.round((Math.random() - 0.5) * 28);

      setItems((prev) => {
        const next = [...prev, { id, x, y, src, rotate }];
        return next.length > MAX_ITEMS
          ? next.slice(next.length - MAX_ITEMS)
          : next;
      });
    },
    [images],
  );

  const remove = useCallback((id: number) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }, []);

  return (
    <div onPointerMove={handleMove} className={className}>
      {/* Trail layer — behind content, non-interactive */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        {items.map((it) => {
          const style: React.CSSProperties & Record<string, string> = {
            left: `${it.x}px`,
            top: `${it.y}px`,
            "--trail-rotate": `${it.rotate}deg`,
          };
          return (
            <span
              key={it.id}
              style={style}
              onAnimationEnd={() => remove(it.id)}
              className="animate-trail absolute block h-[140px] w-[110px] overflow-hidden rounded-[10px] shadow-lg sm:h-[190px] sm:w-[150px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={it.src}
                alt=""
                draggable={false}
                className="h-full w-full object-cover"
              />
            </span>
          );
        })}
      </div>

      {/* Content — above the trail */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
