"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import SpaceCard from "./SpaceCard";

// Animation variants for each card
const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 }, // Start 50px below and transparent
  visible: (i: number) => ({
    y: 0, // End at original y position
    opacity: 1, // Fully opaque
    transition: {
      delay: i * 0.07, // Stagger animation based on index
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function AnimatedSpaceCard({ space, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <SpaceCard space={space} />
    </motion.div>
  );
}
