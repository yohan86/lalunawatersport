"use client";

import { useLayoutEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
useLayoutEffect(() => {
  let smoother: ScrollSmoother | undefined;

  (async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    const { ScrollSmoother } = await import("gsap/ScrollSmoother");

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: false,
    });
  })();

  return () => smoother?.kill();
}, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}