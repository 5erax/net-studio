import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useStudioMotion(root) {
  const [magnetEnabled, setMagnetEnabled] = useState(false);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', pointer: '(hover: hover) and (pointer: fine)' }, context => {
      const { motion, pointer } = context.conditions;
      setMagnetEnabled(motion && pointer);
      if (!motion) return;
      const lenis = new Lenis({ anchors: true, duration: 1.1 });
      const tick = seconds => lenis.raf(seconds * 1000);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      gsap.from('[data-hero]', { y: 28, opacity: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out', clearProps: 'all' });
      gsap.utils.toArray('[data-reveal]').forEach(element => {
        gsap.from(element, { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
      });
      gsap.to('.hero-art', { y: -36, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.reading-progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });

      return () => {
        setMagnetEnabled(false);
        gsap.ticker.remove(tick);
        lenis.off('scroll', ScrollTrigger.update);
        lenis.destroy();
      };
    }, root);
    return () => media.revert();
  }, [root]);

  return magnetEnabled;
}
