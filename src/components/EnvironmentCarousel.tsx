import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type Image = { src: string; alt: string; width: number; height: number };

export function EnvironmentCarousel({ images }: { images: Image[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplay = useRef(Autoplay({ delay: 6000, playOnInit: false, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef, api] = useEmblaCarousel({ loop: true, duration: 60 }, [autoplay.current]);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    const container = containerRef.current;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    if (container) observer.observe(container);
    return () => {
      preference.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!api) return;
    const player = autoplay.current;
    if (inView && !paused && !reducedMotion) player.play();
    else player.stop();
    return () => player.stop();
  }, [api, inView, paused, reducedMotion]);

  return (
    <div ref={containerRef} role="region" aria-roledescription="carrusel" aria-label="Entorno de Santa Liberata">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {images.map((image, index) => (
            <div key={image.src} role="group" aria-roledescription="diapositiva" aria-label={`${index + 1} de ${images.length}`} className="min-w-0 shrink-0 basis-full">
              <img {...image} loading="lazy" decoding="async" className="w-full aspect-[4/3] object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 mt-3 text-ivory">
        <Button variant="ghost" size="icon" className="rounded-none hover:bg-ivory/10 hover:text-ivory" aria-label="Imagen anterior" title="Imagen anterior" onClick={() => api?.scrollPrev(reducedMotion)}><ArrowLeft /></Button>
        {!reducedMotion && (
          <Button variant="ghost" size="icon" className="rounded-none hover:bg-ivory/10 hover:text-ivory" aria-label={paused ? "Reanudar imágenes" : "Pausar imágenes"} title={paused ? "Reanudar imágenes" : "Pausar imágenes"} onClick={() => setPaused((value) => !value)}>{paused ? <Play /> : <Pause />}</Button>
        )}
        <Button variant="ghost" size="icon" className="rounded-none hover:bg-ivory/10 hover:text-ivory" aria-label="Imagen siguiente" title="Imagen siguiente" onClick={() => api?.scrollNext(reducedMotion)}><ArrowRight /></Button>
      </div>
    </div>
  );
}