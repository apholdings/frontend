import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

export default function DarkModeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [effectClick, setEffectClick] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div>
          <button
            type="button"
            onMouseDown={() => {
              setEffectClick(true);
            }}
            onClick={() => {
              setTheme('light');
            }}
            onMouseUp={() => setEffectClick(false)}
            className={`${
              effectClick &&
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
            <MoonIcon className="h-5  w-5 md:h-5 md:w-5" aria-hidden="true" />
          </button>
        </div>
      );
      // eslint-disable-next-line
    } else {
      return (
        <div>
          <button
            type="button"
            onMouseDown={() => {
              setEffectClick(true);
            }}
            onClick={() => {
              setTheme('dark');
            }}
            onMouseUp={() => setEffectClick(false)}
            className={`${
              effectClick &&
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
            <SunIcon className="h-5  w-5 md:h-5 md:w-5" aria-hidden="true" />
          </button>
        </div>
      );
    }
  };

  return renderThemeChanger();
}
