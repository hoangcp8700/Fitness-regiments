import styled from 'styled-components';
import tw from 'twin.macro';

interface StyledPlayerStyleProps {
  isReady?: boolean;
}

export const StyledPlayer = styled.div<StyledPlayerStyleProps>(({ isReady }) => [
  tw`relative after:absolute after:content-[''] after:left-0 after:right-0 after:top-0 after:bg-black after:bg-no-repeat after:bg-[length:200px_100px] after:bg-center after:duration-1000 after:transition-[height] after:z-[101]`,
  isReady ? tw`after:h-0` : tw`after:h-[95%]`,
]);
