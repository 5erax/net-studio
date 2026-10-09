import { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useStudioMotion(root) {
  const [magnetEnabled, setMagnetEnabled] = useState(false);
  const scroll = useRef(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add({ motion: '(prefers-reduced-motion: no-preference)', pointer: '(hover: hover) and (pointer: fine)' }, context => {
      const { motion, pointer } = context.conditions;
      setMagnetEnabled(motion && pointer);
      if (!motion) return;
      const lenis = new Lenis({ duration: 1.1 });
      scroll.current = lenis;
      const tick = seconds => lenis.raf(seconds * 1000);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      gsap.from('.ctl-copy .ctl-rise', { y: 18, opacity: 0, duration: 0.85, stagger: 0.08, ease: 'power3.out', clearProps: 'transform,opacity' });
      gsap.utils.toArray('[data-reveal]').forEach(element => {
        gsap.from(element, { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: element, start: 'top 92%', once: true } });
      });
      gsap.from('.ctl-studio-art', { opacity: .4, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '.ctl-toile', start: 'top 85%', once: true }, clearProps: 'opacity' });
      gsap.to('.reading-progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });

      return () => {
        setMagnetEnabled(false);
        scroll.current = null;
        gsap.ticker.remove(tick);
        lenis.off('scroll', ScrollTrigger.update);
        lenis.destroy();
      };
    }, root);
    return () => media.revert();
  }, [root]);

  const navigate = useCallback(target => {
    if (scroll.current) scroll.current.scrollTo(target);
    else target?.scrollIntoView({ behavior: 'auto', block: 'start' });
  }, []);

  return { magnetEnabled, navigate };
}
