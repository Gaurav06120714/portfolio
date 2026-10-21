"use client";
import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// Honour the visitor's "reduce motion" setting for every framer-motion animation.
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
