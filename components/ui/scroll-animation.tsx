"use client";

import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { AnimationName } from "@/lib/animations";
import { animationMap } from "@/lib/animations";

interface ScrollAnimationProps {
	animation?: AnimationName;
	delay?: number;
	threshold?: number;
	triggerOnce?: boolean;
	customVariants?: Variants;
	className?: string;
	children: React.ReactNode;
}

export function ScrollAnimation({
	animation = "fade-up",
	delay = 0,
	threshold = 0.1,
	triggerOnce = false,
	customVariants,
	className,
	children,
}: ScrollAnimationProps) {
	const variants = customVariants ?? animationMap[animation];

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: triggerOnce, amount: threshold }}
			variants={variants}
			transition={{ delay }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
