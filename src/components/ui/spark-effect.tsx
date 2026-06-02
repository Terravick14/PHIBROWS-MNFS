import { useEffect, useRef } from "react";

interface SparkEffectProps {
  amount?: number;
  speed?: number;
  lifetime?: number;
  direction?: { x: number; y: number };
  size?: [number, number];
  maxopacity?: number;
  color?: string;
  randColor?: boolean;
  acceleration?: [number, number];
}

interface SparkParticle {
  x: number;
  y: number;
  age: number;
  acceleration: number;
  color: string;
  opacity: number;
  go: () => void;
}

export function SparkEffect({
  amount      = 80,
  speed       = 0.2,
  lifetime    = 180,
  direction   = { x: 0, y: -1 },
  size        = [1.5, 1.5],
  maxopacity  = 0.7,
  color       = "201, 168, 76",
  randColor   = false,
  acceleration= [4, 18] as [number, number],
}: SparkEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let sparks: SparkParticle[] = [];
    let rafId: number;
    let intervalId: ReturnType<typeof setInterval>;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createSpark = (x: number, y: number): SparkParticle => {
      const acc = rand(acceleration[0], acceleration[1]);
      const c   = randColor
        ? `${rand(0, 255)},${rand(0, 255)},${rand(0, 255)}`
        : color;
      const spark: SparkParticle = {
        x, y, age: 0, acceleration: acc, color: c, opacity: maxopacity,
        go() {
          this.x += speed * direction.x * (this.acceleration / 2);
          this.y += speed * direction.y * (this.acceleration / 2);
          this.opacity = maxopacity - (++this.age) / lifetime;
        },
      };
      return spark;
    };

    const addSpark = () => {
      if (sparks.length >= amount) return;
      const x = rand(-10, canvas.width + 10);
      const y = rand(canvas.height * 0.2, canvas.height + 10);
      sparks.push(createSpark(x, y));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparks = sparks.filter(s => s.opacity > 0);
      for (const spark of sparks) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${spark.color},${Math.max(0, spark.opacity)})`;
        ctx.rect(spark.x, spark.y, size[0], size[1]);
        ctx.fill();
        spark.go();
      }
      rafId = requestAnimationFrame(draw);
    };

    resize();
    // Throttle to ~40fps to keep CPU low
    const MS_PER_FRAME = 25;
    let lastDraw = 0;
    const throttledDraw = (ts: number) => {
      if (ts - lastDraw >= MS_PER_FRAME) {
        lastDraw = ts;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sparks = sparks.filter(s => s.opacity > 0);
        for (const spark of sparks) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${spark.color},${Math.max(0, spark.opacity)})`;
          ctx.rect(spark.x, spark.y, size[0], size[1]);
          ctx.fill();
          spark.go();
        }
      }
      rafId = requestAnimationFrame(throttledDraw);
    };

    // Cancel the non-throttled draw, use throttled version
    cancelAnimationFrame(rafId!);
    rafId = requestAnimationFrame(throttledDraw);

    // Add sparks at a controlled rate: one every 80ms max
    intervalId = setInterval(addSpark, 80);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      clearInterval(intervalId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, speed, lifetime, color, randColor, maxopacity,
      direction.x, direction.y, size[0], size[1], acceleration[0], acceleration[1]]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        background:    "transparent",
        pointerEvents: "none",
      }}
    />
  );
}
