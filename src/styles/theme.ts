import { ConfigProviderProps } from 'antd/es/config-provider';
import { AliasToken } from 'antd/es/theme/internal';

export enum BaseColors {
  DEFAULT = '#031F3A',
  primary = '#2976A5',
  danger = '#FF6600',
  yellow = '#FCD860',
  violet = '#031F3A',
  blueDark = '#00293C',
  black = '#00293C',
  black2 = '#1A1A1A',
  black3 = '#242424',
  blue = '#4490C1',
  red = '#FF2B2B',
  red2 = '#EC5B56',
  link = '#369CFF',
  green = '#1E656D',
  green2 = '#07c800',
  light = '#F1F1F2',
  grey = '#A8A8A8',
  grey2 = '#D0D0D0',
  grey3 = '#707070',
  grey4 = '#697E89',
  grey5 = '#6A7E88',
  grey6 = '#FAFAFB',
  grey7 = '#F1F1F1',
  grey8 = '#787878',
  grey9 = '#FBFBFB',
  grey10 = '#C5C5C5',
  grey11 = '#F5F5F5',
  grey12 = '#DEDEDE',
  grey13 = '#EBEBEB',
  grey14 = '#E8E8E8',
  grey15 = '#727272',
  grey16 = '#E4E4E4',
  grey17 = '#B8B8B8',
  momentum = '#404040',
  gray = '#F3F4F5',
  white = '#FFFFFF',
}

export enum BaseShadow {
  primary = '0px 4px 6px rgba(30, 101, 109, 0.3)',
  primarySM = '0px 3px 6px rgba(9, 130, 143, 0.41)',
  violetSM = '0px 3px 6px rgba(3, 31, 58, 0.36)',
}

export const headerHeight = 64;
export const sidebar = 280;
export const sidebarCollapsed = 100;

export const breakpoint = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
  fhd: 1920,
};
export type BreakPointType = typeof breakpoint;
export type BreakPointKeyType = keyof BreakPointType;

const token: Partial<AliasToken> = {
  boxShadow: 'none',
  blue: BaseColors.blueDark,
  fontFamily: 'Montserrat Regular',
  fontSize: 16,
  fontSizeHeading2: 35,
  colorText: BaseColors.DEFAULT,
  colorLink: BaseColors.link,
  colorError: BaseColors.red2,
  screenXS: breakpoint.xs,
  screenSM: breakpoint.sm,
  screenMD: breakpoint.md,
  screenLG: breakpoint.lg,
  screenXL: breakpoint.xl,
  screenXXL: breakpoint.xxl,
};

const themConfig: ConfigProviderProps['theme'] = {
  token,
};

const configTheme = { baseColors: BaseColors, themConfig, breakpoint };
export default configTheme;
