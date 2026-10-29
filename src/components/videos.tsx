import type { StaticImageData } from "next/image";
import angelBailaConmigo from "@/assets/images/videos/angel-baila-conmigo.jpg";
import jonnyAndSami from "@/assets/images/videos/jonny-and-sami.jpg";
import leadStyling from "@/assets/images/videos/lead-styling-angel-garcia.jpg";
import lunaWithFrancis from "@/assets/images/videos/luna-with-francis.jpg";
import { ArrowUpRight, YouTube } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { YouTubeLite } from "@/components/youtube-lite";
import { links, videos } from "@/content/event";

const thumbnails: Record<(typeof videos)[number]["thumbnail"], StaticImageData> = {
  "lead-styling-angel-garcia": leadStyling,
  "luna-with-francis": lunaWithFrancis,
  "angel-baila-conmigo": angelBailaConmigo,
  "jonny-and-sami": jonnyAndSami,
};

export function Videos() {
  return (
    <section id="videos" className="py-20 sm:py-28">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={`Playlist · ${videos.length} videos`} title="See the artists in action" />
          <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <YouTube className="size-5" />
            More on YouTube
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {videos.map((video) => (
            <div key={video.id} className="reveal">
              <YouTubeLite id={video.id} title={video.title} thumbnail={thumbnails[video.thumbnail]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
