import type { Variants } from "framer-motion";

export type AnimationName = "fade-in" | "fade-up" | "fade-left" | "fade-right" | "scale-fade";

export const fadeInVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeUpVariants: Variants = {
	hidden: { opacity: 0, y: 60 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeLeftVariants: Variants = {
	hidden: { opacity: 0, x: -60 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeRightVariants: Variants = {
	hidden: { opacity: 0, x: 60 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const scaleFadeVariants: Variants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const animationMap: Record<AnimationName, Variants> = {
	"fade-in": fadeInVariants,
	"fade-up": fadeUpVariants,
	"fade-left": fadeLeftVariants,
	"fade-right": fadeRightVariants,
	"scale-fade": scaleFadeVariants,
};
