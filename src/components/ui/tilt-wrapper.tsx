import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
}

export const TiltWrapper = ({
  children,
  className = "",
  maxTilt = 12,
  perspective = 1000,
  glare = true,
}: TiltWrapperProps) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Mola para suavizar o movimento
  const springConfig = { stiffness: 120, damping: 20, mass: 1 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Mapeamento para rotação 3D
  const rotateX = useTransform(mouseYSpring, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-maxTilt, maxTilt]);

  // Lógica do Brilho (Glare)
  const glareX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseXSpring, [0, 0.5, 1], [0.15, 0, 0.15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: isMobile ? "flat" : "preserve-3d",
        perspective: isMobile ? "none" : `${perspective}px`,
      }}
      className={`relative ${className}`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="w-full h-full"
      >
        {children}
      </div>
      
      {glare && (
        <motion.div
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(251, 191, 36, 0.4) 0%, transparent 60%)`,
            opacity: glareOpacity,
          }}
          className="absolute inset-0 z-20 pointer-events-none"
        />
      )}
    </motion.div>
  );
};
