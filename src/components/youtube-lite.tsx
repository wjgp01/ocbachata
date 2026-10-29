"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { Play } from "@/components/icons";

// Shows a lightweight thumbnail and only loads the YouTube player once someone presses play.
export function YouTubeLite({ id, title, thumbnail }: { id: string; title: string; thumbnail: StaticImageData }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl bg-night-900 ring-1 ring-white/10">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 text-left"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={thumbnail}
            alt=""
            fill
            placeholder="blur"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-linear-to-t from-night-950/90 via-night-950/20 to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-linear-to-br from-flame to-brand text-white shadow-[0_10px_40px_-5px_rgb(255_77_31/0.8)] transition duration-300 group-hover:scale-110 sm:size-20">
            <Play className="ml-1 size-7 sm:size-8" />
          </span>
          <span className="absolute inset-x-0 bottom-0 p-5 font-display text-3xl font-black uppercase italic leading-none sm:p-6">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
