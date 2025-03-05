"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  
} from "react";
import { motion, useMotionValue,  } from "framer-motion";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className={containerClassName}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
    >
      <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
        <motion.div
          className={className}
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: isMouseEntered ? -5 : 0,
            rotateY: isMouseEntered ? 5 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      </MouseEnterContext.Provider>
    </div>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} w-full h-full`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  as?: React.ElementType;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  const z = typeof translateZ === "number" ? `${translateZ}px` : translateZ;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        transform: isMouseEntered
          ? `translateZ(${z}) translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          : "none",
        transition: "transform 0.3s ease-out",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// Hook to use the mouse enter context
const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};