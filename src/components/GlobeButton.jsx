import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function GlobeButton() {
  const [effectI18N, setEffectI18N] = useState(false);

  return (
    <div>
      <button
        type="button"
        onMouseDown={() => {
          setEffectI18N(true);
        }}
        onMouseUp={() => setEffectI18N(false)}
        className={`${
          effectI18N &&
          'duration-400 animate-click hover:translate-x-0.5  hover:translate-y-0.5 hover:shadow-neubrutalism-sm '
        } inline-flex items-center justify-center 
          p-2.5
          text-sm 
          transition 
          duration-300 
          ease-in-out
          hover:-translate-x-0.5  hover:-translate-y-0.5  hover:text-iris-600  
          hover:shadow-neubrutalism-sm
        dark:border-dark-third dark:bg-dark-second dark:text-dark-txt dark:hover:text-white `}
      >
        <GlobeAltIcon className="h-5  w-5 md:h-5 md:w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
