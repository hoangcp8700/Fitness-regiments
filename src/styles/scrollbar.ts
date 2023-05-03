import styled from 'styled-components';

interface ScrollbarProps {
  size?: number;
  thumbColor?: string;
  trackColor?: string;
  borderRadiusTrack?: number;
  borderRadiusThumb?: number;
  borderThumb?: number;
}

export const scrollbarCSS = ({
  size,
  thumbColor,
  trackColor,
  borderRadiusTrack,
  borderRadiusThumb,
  borderThumb,
}: ScrollbarProps) => `
    overflow-y: auto;
    
    scrollbar-face-color:${thumbColor};
    scrollbar-track-color: ${trackColor};

    // For Google Chrome
    &::-webkit-scrollbar {
      height:${size}px;
      width:${size}px;
    }

    &::-webkit-scrollbar-thumb {
      background:${thumbColor};
      border: ${borderThumb}px solid ${trackColor};
      border-radius: ${borderRadiusThumb}px;
    }

    &::-webkit-scrollbar-track {
      background: ${trackColor};
      border-radius:${borderRadiusTrack}px;
    }
  `;

export const Scrollbar = styled.div<ScrollbarProps>(
  ({
    size = 6,
    thumbColor = '#999',
    trackColor = 'transparent',
    borderRadiusTrack = 100,
    borderRadiusThumb = 100,
    borderThumb = 2,
  }) => `
  // For Internet Explorer
   ${scrollbarCSS({ size, thumbColor, trackColor, borderRadiusTrack, borderRadiusThumb, borderThumb })}
  `,
);
