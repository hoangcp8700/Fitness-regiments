import useWindowSize from '@hooks/useWindowResize';
import { useCallback } from 'react';
import { breakpoint, BreakPointKeyType, BreakPointType } from 'src/styles/theme';

interface ValueWithBreakpointParams extends Partial<BreakPointType> {
  default?: number;
}

export const useValueWithBreakpoint = () => {
  const { width: windowInnerWidth } = useWindowSize();

  const isMobile = windowInnerWidth < breakpoint.md;
  /**
   * value on max width
   */

  const withMaxWidth = useCallback(
    (param: ValueWithBreakpointParams): number | undefined => {
      let result: number | undefined = param.default;

      Object.keys(breakpoint).map((key) => {
        const value = breakpoint[key as BreakPointKeyType];
        const paramValue = param[key as BreakPointKeyType];
        if (value > windowInnerWidth && typeof paramValue === 'number') {
          result = param[key as BreakPointKeyType];
        }
        return null;
      });
      return result;
    },
    [windowInnerWidth],
  );

  return { withMaxWidth, isMobile };
};
