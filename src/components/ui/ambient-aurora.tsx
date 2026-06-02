import { useRef, useEffect } from "react";

interface AmbientAuroraProps {
  opacity?: number;
}

export default function AmbientAurora({ opacity = 1 }: AmbientAuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    let rafId: number;

    const setSize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Brand-adapted colors: purple, gold, pink, cream
    const colors = [
      { r: 201, g: 168, b:  76 }, // gold
      { r: 168, g:  85, b: 247 }, // purple
      { r: 247, g:  80, b: 146 }, // pink
      { r: 201, g: 168, b:  76 }, // gold again (more presence)
      { r: 222, g: 185, b: 106 }, // gold-light
    ];

    class Orb {
      x: number; y: number;
      radius: number;
      color: { r: number; g: number; b: number };
      vx: number; vy: number;

      constructor() {
        this.x      = Math.random() * canvas!.width;
        this.y      = Math.random() * canvas!.height;
        this.radius = Math.random() * 350 + 120;
        this.color  = colors[Math.floor(Math.random() * colors.length)];
        this.vx     = (Math.random() - 0.5) * 0.45;
        this.vy     = (Math.random() - 0.5) * 0.45;
      }

      draw() {
        const g = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        g.addColorStop(0, `rgba(${this.color.r},${this.color.g},${this.color.b},0.28)`);
        g.addColorStop(1, `rgba(${this.color.r},${this.color.g},${this.color.b},0)`);
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      update() {
        this.x += this.vx + Math.sin(time * 0.0008) * 0.4;
        this.y += this.vy + Math.cos(time * 0.0008) * 0.4;
        const w = canvas!.width, h = canvas!.height;
        if (this.x < -this.radius || this.x > w + this.radius ||
            this.y < -this.radius || this.y > h + this.radius) {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
        }
      }
    }

    const orbs: Orb[] = Array.from({ length: 10 }, () => new Orb());

    // Throttle to ~40fps for performance
    let lastFrame = 0;
    const INTERVAL = 25;

    const animate = (ts: number) => {
      rafId = requestAnimationFrame(animate);
      if (ts - lastFrame < INTERVAL) return;
      lastFrame = ts;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;
      orbs.forEach(o => { o.update(); o.draw(); });
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity,
        pointerEvents: "none",
      }}
    />
  );
}
