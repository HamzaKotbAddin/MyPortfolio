"use client";
import React from "react";
import { motion } from "framer-motion";

// 6. Glitch Entry (Techy)
type GlitchEntryProps = React.PropsWithChildren<{ delay?: number }>;

export const GlitchEntry = ({ children, delay = 0 }: GlitchEntryProps) => (
  <motion.div
    initial={{
      opacity: 0,
      x: -100,
      skewX: -20,
      filter: "hue-rotate(90deg)",
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      skewX: 0,
      filter: "hue-rotate(0deg)",
    }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    }}
  >
    {children}
  </motion.div>
);

type AnimationProps = React.PropsWithChildren<{ delay?: number }>;

// 1. Slide Up with Blur (Very Modern)
export const SlideUpBlur = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    }}
  >
    {children}
  </motion.div>
);

// 2. Magnetic Pull (Elastic Spring)
export const MagneticPull = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay,
    }}
    whileHover={{ scale: 1.02 }}
  >
    {children}
  </motion.div>
);

// 3. Staggered Reveal (Text/Cards)
export const StaggerContainer = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    }}
  >
    {React.Children.map(children, (child, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, y: 30, rotateX: -15 },
          visible: { opacity: 1, y: 0, rotateX: 0 },
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {child}
      </motion.div>
    ))}
  </motion.div>
);

// 4. Morphing Scale (Very Smooth)
export const MorphingScale = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, borderRadius: "100%" }}
    whileInView={{ opacity: 1, scale: 1, borderRadius: "0%" }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1],
      delay,
    }}
    style={{ overflow: "hidden" }}
  >
    {children}
  </motion.div>
);

// 5. Perspective Flip (3D Effect)
export const PerspectiveFlip = ({ children, delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, rotateY: -90 }}
    whileInView={{ opacity: 1, rotateY: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay,
    }}
    style={{ perspective: 1000 }}
  >
    {children}
  </motion.div>
);
