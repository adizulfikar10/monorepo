import { useEffect, useMemo, useState } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export function useDeviceType(): DeviceType {
  const [width, setWidth] = useState<number>(
    typeof window === 'undefined' ? 1024 : window.innerWidth
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }
    return undefined;
  }, []);

  return useMemo(() => {
    if (width < 640) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }, [width]);
}