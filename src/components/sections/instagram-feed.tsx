"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { clinic } from "@/config/clinic";
import { FadeIn } from "@/components/shared/fade-in";
import { gallery } from "@/content/gallery";

export function InstagramFeed() {
  const shots = gallery.slice(0, 6);

  return (
    <section className="pb-8 pt-4">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Instagram</h3>
            </div>
            <a
              href={clinic.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              @vetcare
            </a>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {shots.map((shot, i) => (
            <FadeIn key={shot.id} delay={i * 0.04}>
              <a
                href={clinic.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 16vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition group-hover:bg-primary/40 group-hover:opacity-100">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
