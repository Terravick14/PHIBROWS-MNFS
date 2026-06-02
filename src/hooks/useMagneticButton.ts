import { type RefObject, useEffect } from "react";
import gsap from "gsap";

export function useMagneticButton(ref: RefObject<HTMLElement | null>, strength = 18) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const move = (event: MouseEvent) => {
      const box = node.getBoundingClientRect();
      const x = (event.clientX - box.left - box.width / 2) / box.width;
      const y = (event.clientY - box.top - box.height / 2) / box.height;
      gsap.to(node, { x: x * strength, y: y * strength, scale: 1.03, duration: .35, ease: "power2.out" });
    };
    const leave = () => gsap.to(node, { x: 0, y: 0, scale: 1, duration: .45, ease: "power3.out" });

    node.addEventListener("mousemove", move);
    node.addEventListener("mouseleave", leave);
    return () => {
      node.removeEventListener("mousemove", move);
      node.removeEventListener("mouseleave", leave);
    };
  }, [ref, strength]);
}
