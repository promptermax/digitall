import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "./ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png"
];

export default function ClientLogos() {
  // Embla instance for autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 4, dragFree: true });
  const autoplayRef = useRef();

  useEffect(() => {
    if (!emblaApi) return;
    function autoplay() {
      if (emblaApi) {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0);
        } else {
          emblaApi.scrollNext();
        }
      }
    }
    autoplayRef.current = setInterval(autoplay, 2000);
    return () => clearInterval(autoplayRef.current);
  }, [emblaApi]);

  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-2xl font-bold mb-8 text-[#2D2D2D]">Trusted by Leading Brands</h2>
      <div className="max-w-5xl mx-auto">
        <Carousel opts={{ loop: true }} className="">
          <CarouselContent ref={emblaRef} className="gap-8 items-center">
            {logos.concat(logos).map((logo, idx) => (
              <CarouselItem key={idx} className="flex items-center justify-center basis-1/6">
                <img
                  src={logo}
                  alt={`Client logo ${idx + 1}`}
                  className="h-16 w-auto grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
} 