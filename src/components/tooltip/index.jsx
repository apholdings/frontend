import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { useSpring, motion } from 'framer-motion';

function AnimatedTippy({ children, content, offsetX, offsetY }) {
  const springConfig = { damping: 15, stiffness: 300 };
  const initialScale = 0.5;
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);

  function onMount() {
    scale.set(1);
    opacity.set(1);
  }

  function onHide({ unmount }) {
    const cleanup = scale.onChange((value) => {
      if (value <= initialScale) {
        cleanup();
        unmount();
      }
    });

    scale.set(initialScale);
    opacity.set(0);
  }

  return (
    <Tippy
      interactive
      offset={[offsetX, offsetY]}
      render={(attrs) => (
        <motion.div
          className="w-auto dark:bg-dark-second bg-white leading-6 shadow-lg rounded-lg"
          style={{ scale, opacity }}
          {...attrs}
        >
          {content}
        </motion.div>
      )}
      animation
      // eslint-disable-next-line
      onMount={onMount}
      // eslint-disable-next-line
      onHide={onHide}
    >
      {children}
    </Tippy>
  );
}

export default AnimatedTippy;
