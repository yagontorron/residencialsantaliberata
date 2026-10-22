import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

type Item = { src: string; cap: string };

export function PlaceCarousel({ items }: { items: Item[] }) {
  const autoplay = useRef(
    Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, duration: 60 },
    [autoplay.current],
  );

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((i) => (
            <figure
              key={i.cap}
              className="shrink-0 basis-[80%] sm:basis-[55%] md:basis-[38%] lg:basis-[30%] pr-8 md:pr-10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={i.src}
                  alt={i.cap}
                  loading="lazy"
                  className="w-full h-72 md:h-[26rem] object-cover"
                  style={{ filter: "saturate(0.85) contrast(0.98)" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(43,31,20,0) 55%, rgba(43,31,20,0.18) 100%)",
                  }}
                />
              </div>
              <figcaption className="eyebrow mt-4">{i.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
