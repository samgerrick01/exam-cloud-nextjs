'use client';

import YouTube, { YouTubeProps } from 'react-youtube';

import { IsubTeamCard } from '../interface';

interface ICardColumnTwo {
  card: IsubTeamCard;
}

const CardColumnTwo = (props: ICardColumnTwo) => {
  const ref = props.card?.video[0]?.video;

  let videoId = ref.url.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '450px',
    playerVars: {
      controls: 0,
    },
  };

  return ref.url && <YouTube videoId={videoId} opts={opts} />;
};

export default CardColumnTwo;
