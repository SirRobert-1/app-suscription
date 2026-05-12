'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { geologica } from '@/lib/fonts';
import Link from 'next/link';

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest < 200);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="floating-button"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 right-0 z-50 -translate-x-1/2"
        >
          <Link href="/registro">
            <Button
              className={clsx(
                'bg-morado hover:bg-morado/90 shadow-morado/30 rounded-full px-8 py-6 text-xl font-bold text-white shadow-lg',
                geologica.className
              )}
            >
              Contrata ahora
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
