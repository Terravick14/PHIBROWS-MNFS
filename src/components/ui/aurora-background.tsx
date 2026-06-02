import React from "react";
import { motion } from "framer-motion";

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  starCount?: number;
  gradientColors?: [string, string];
  pulseDuration?: number;
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
  starCount = 40,
  gradientColors = [
    "rgba(201,168,76,0.13)",
    "rgba(222,185,106,0.09)",
  ],
  pulseDuration = 10,
}) => {
  const [colorA, colorB] = gradientColors;

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

        {/* Pulsing radial gradients */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 30% 50%, ${colorA} 0%, transparent 70%),
              radial-gradient(ellipse at 70% 50%, ${colorB} 0%, transparent 70%)
            `,
            animation: `aurora-pulse ${pulseDuration}s ease-in-out infinite`,
          }}
        />

        {/* Blurred gold blobs */}
        <motion.div className="absolute inset-0">
          <motion.div
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full"
            style={{ background: "rgba(201,168,76,0.08)", filter: "blur(80px)" }}
            animate={{ x: [-30, 30, -30], y: [-15, 15, -15], scale: [1, 1.15, 1] }}
            transition={{ duration: 28, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full"
            style={{ background: "rgba(222,185,106,0.07)", filter: "blur(90px)" }}
            animate={{ x: [30, -30, 30], y: [15, -15, 15], scale: [1, 1.2, 1] }}
            transition={{ duration: 36, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full"
            style={{ background: "rgba(237,224,208,0.04)", filter: "blur(70px)" }}
            animate={{ x: [15, -15, 15], y: [-20, 20, -20], rotate: [0, 180, 0] }}
            transition={{ duration: 45, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        </motion.div>

        {/* Twinkling gold stars */}
        {Array.from({ length: starCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() > 0.7 ? "2px" : "1px",
              height: Math.random() > 0.7 ? "2px" : "1px",
              background: "rgba(201,168,76,0.9)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0, Math.random() * 0.7 + 0.1, 0] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuroraBackground;
