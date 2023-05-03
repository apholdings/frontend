import dynamic from 'next/dynamic';
import React from 'react';

const ParticlesBg = dynamic(() => import('particles-bg'), { ssr: false });
// eslint-disable-next-line
const ParticlesBackground = () => {
  return (
    <>
      {typeof window !== 'undefined' && (
        <ParticlesBg
          color="#c5e3f4"
          num={100}
          line_linked={{
            enable: true,
            distance: 100,
            color: '#c5e3f4',
            opacity: 0.2,
            width: 0.5,
          }}
          move={{
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 800,
              rotateY: 800,
            },
          }}
          type="cobweb"
          // eslint-disable-next-line
          bg={true}
        />
      )}
      <div />
    </>
  );
};

export default ParticlesBackground;
