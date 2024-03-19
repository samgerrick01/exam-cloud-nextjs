'use client';

import React from 'react';
import ReactPlayer from 'react-player';

import { IsubTeamCard } from '../interface';

interface ICardColumnTwo {
  card: IsubTeamCard;
}

const CardColumnTwo = (props: ICardColumnTwo) => {
  const ref = props.card?.video[0]?.video;

  return (
    <ReactPlayer
      className='react-player'
      url={ref.url}
      controls={true}
      width='100%'
      height='100%'
    />
  );
};

export default CardColumnTwo;
