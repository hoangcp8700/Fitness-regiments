import { useEffect, useState } from 'react';

interface WindowReSizeProps {
  width: number;
  height: number;
}

function useWindowSize(delay = 0): WindowReSizeProps {
  const [windowSize, setWindowSize] = useState<WindowReSizeProps>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        timeoutId = null;
      }, delay);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [delay]);

  return windowSize;
}

export default useWindowSize;

// EXAMPLE:
// const windowSize = useWindowResize(250);
