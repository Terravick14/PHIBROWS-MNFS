import React, { useId } from "react";

interface GradientTracingProps {
  width: number;
  height: number;
  baseColor?: string;
  gradientColors?: [string, string, string];
  animationDuration?: number;
  strokeWidth?: number;
  path?: string;
  opacity?: number;
}

export const GradientTracing: React.FC<GradientTracingProps> = ({
  width,
  height,
  baseColor = "white",
  gradientColors = ["#C9A84C", "#F0D080", "#C9A84C"],
  animationDuration = 4,
  strokeWidth = 1.5,
  path = `M0,${height / 2} L${width},${height / 2}`,
  opacity = 1,
}) => {
  const id = useId().replace(/:/g, "");
  const gid = `gt${id}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Faint static base line */}
      <path d={path} stroke={baseColor} strokeOpacity="0.06" strokeWidth={strokeWidth} />

      {/* Animated glowing line */}
      <path d={path} stroke={`url(#${gid})`} strokeLinecap="round" strokeWidth={strokeWidth} />

      <defs>
        {/* SVG-native SMIL animation — zero JS runtime cost */}
        <linearGradient id={gid} gradientUnits="userSpaceOnUse" x1="0" x2={width / 2}>
          <stop stopColor={gradientColors[0]} stopOpacity="0" />
          <stop offset="0.5" stopColor={gradientColors[1]} />
          <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          <animate
            attributeName="x1"
            from={-width}
            to={width * 2}
            dur={`${animationDuration}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            from={0}
            to={width * 3}
            dur={`${animationDuration}s`}
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
