"use client";

import Image from "next/image";
import FadeIn from "./gsap/FadeIn";
import Parallax from "./gsap/Parallax";

export default function MosaicFigure({ src, alt, cap, className, delay = 0, w = 1200, h = 1600, sizes }) {
  return (
    <FadeIn as="figure" className={className} delay={delay}>
      <div className="img-clip">
        <Parallax yPercent={14}>
          <Image src={src} alt={alt} width={w} height={h} sizes={sizes} style={{ height: "120%", objectFit: "cover" }} />
        </Parallax>
      </div>
      <figcaption>{cap}</figcaption>
    </FadeIn>
  );
}
