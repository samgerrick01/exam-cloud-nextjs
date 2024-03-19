'use client';

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

  const src = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      width='99.5%'
      height='99%'
      src={src}
      title='YouTube video player'
      allowFullScreen
      allow='autoplay; encrypted-media; picture-in-picture'
    />
  );
};

export default CardColumnTwo;
