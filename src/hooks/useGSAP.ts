import { type DependencyList, type RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAP(
  scope: RefObject<HTMLElement | null>,
  setup: () => void,
  deps: DependencyList = [],
) {
  useLayoutEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(setup, scope);
    // Refresh after a tick so all triggers register then detect current scroll position
    const id = setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => {
      clearTimeout(id);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
