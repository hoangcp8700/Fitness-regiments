import React, { useEffect, useRef, useState } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

import { initialOptions } from './utils/initialize';
import { plyrID } from './utils/constants';
import { StyledPlayer } from './styles';

interface Player2Props {
  options?: Plyr.Options;
  source: Plyr.SourceInfo;
  poster?: string;
}

const Player: React.FC<Player2Props> = ({ options, source, poster }) => {
  const playerWrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Plyr | null>(null);
  const [isReady, setIsReady] = useState(false);

  // CONFIG PLAYER
  useEffect(() => {
    if (!playerWrapperRef.current) return;
    playerWrapperRef.current.setAttribute('data-plyr-provider', source.sources[0].provider as string);
    playerWrapperRef.current.setAttribute('data-plyr-embed-id', source.sources[0].src as string);

    const player = new Plyr(playerWrapperRef.current, initialOptions(options));
    player.poster = poster as string;
    playerRef.current = player;

    return () => {
      playerRef?.current?.destroy();
    };
  }, [options, source, poster, playerWrapperRef]);

  useEffect(() => {
    if (!playerRef.current) return;
    const onReady = () => {
      setIsReady(true);
    };

    playerRef?.current?.on('ready', onReady);
    return () => {
      playerRef?.current?.off('ready', onReady);
    };
  }, []);

  return (
    <StyledPlayer isReady={isReady} className='after:bg-loading-ball'>
      <div id={plyrID} className='plyr__video-embed' ref={playerWrapperRef} />;
    </StyledPlayer>
  );
};

export default Player;
