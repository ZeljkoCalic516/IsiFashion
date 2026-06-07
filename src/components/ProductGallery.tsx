"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const safeImages = images.length ? images : [];

  return (
    <div>
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-sand-200">
        {safeImages[active] && (
          <Image
            src={safeImages[active]}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>

      {safeImages.length > 1 && (
        <div className="mt-4 flex gap-3">
          {safeImages.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative aspect-square w-20 overflow-hidden rounded-xl bg-sand-200 ring-2 transition ${
                i === active ? "ring-burgundy" : "ring-transparent"
              }`}
            >
              <Image
                src={img}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
