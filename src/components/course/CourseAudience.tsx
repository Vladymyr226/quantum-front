"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import type { CourseAudienceData, CourseAudienceItem } from "@/content/courses";

function AudienceCard({ item }: { item: CourseAudienceItem }) {
  return (
    <div className="relative aspect-[5/7] w-[320px] shrink-0 overflow-hidden rounded-[20px] bg-white/5 lg:w-[380px]">
      <Image
        src={item.image}
        alt=""
        fill
        draggable={false}
        sizes="(max-width: 1024px) 320px, 380px"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-black/60 px-5 py-6 text-center backdrop-blur-md lg:py-7">
        <p className="font-sans text-[17px] leading-[1.3] font-normal whitespace-pre-line text-white lg:text-[20px]">
          {item.caption}
        </p>
      </div>
    </div>
  );
}

const AUTO_SPEED = 45;

export function CourseAudience({ heading, items }: CourseAudienceData) {
  const trackRef = useRef<HTMLDivElement>(null);
  const loop = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const baseSpeed = reduce ? 0 : AUTO_SPEED;

    const st = {
      offset: 0,
      v: baseSpeed,
      dragging: false,
      hovering: false,
      lastX: 0,
      pointerVel: 0,
      lastMoveT: 0,
      halfW: 0,
    };

    const measure = () => {
      const kids = track.children;
      let w = 0;
      const n = kids.length / 2;
      for (let i = 0; i < n; i++) {
        const el = kids[i] as HTMLElement;
        const s = getComputedStyle(el);
        w +=
          el.getBoundingClientRect().width +
          parseFloat(s.marginLeft) +
          parseFloat(s.marginRight);
      }
      st.halfW = w;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!st.dragging) {
        const target = st.hovering ? 0 : baseSpeed;
        st.v += (target - st.v) * (1 - Math.pow(0.0022, dt));
        st.offset += st.v * dt;
      }
      if (st.halfW > 0) {
        st.offset = ((st.offset % st.halfW) + st.halfW) % st.halfW;
      }
      track.style.transform = `translate3d(${-st.offset}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onDown = (e: PointerEvent) => {
      st.dragging = true;
      st.lastX = e.clientX;
      st.pointerVel = 0;
      st.lastMoveT = performance.now();
    };
    const onMove = (e: PointerEvent) => {
      if (!st.dragging) return;
      const dx = e.clientX - st.lastX;
      st.lastX = e.clientX;
      st.offset -= dx;
      const now = performance.now();
      const dtm = (now - st.lastMoveT) / 1000;
      if (dtm > 0) st.pointerVel = 0.6 * st.pointerVel + 0.4 * (-dx / dtm);
      st.lastMoveT = now;
    };
    const onUp = () => {
      if (!st.dragging) return;
      st.dragging = false;

      st.v = Math.max(-2600, Math.min(2600, st.pointerVel));
    };
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") st.hovering = true;
    };
    const onLeave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") st.hovering = false;
    };

    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    track.addEventListener("pointerenter", onEnter);
    track.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      track.removeEventListener("pointerenter", onEnter);
      track.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="-mt-px overflow-hidden bg-[#262626] py-20 text-white lg:py-[100px]">
      <h2 className="px-5 text-center font-heading text-[38px] leading-[1.05] font-bold tracking-[-0.01em] text-balance uppercase lg:text-[56px]">
        {heading}
      </h2>

      <div
        ref={trackRef}
        onDragStart={(e) => e.preventDefault()}
        className="mt-12 flex w-max cursor-grab touch-pan-y [will-change:transform] select-none active:cursor-grabbing lg:mt-16"
      >
        {loop.map((item, i) => (
          <div
            key={i}
            className="mr-4 shrink-0 lg:mr-6"
            aria-hidden={i >= items.length}
          >
            <AudienceCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
