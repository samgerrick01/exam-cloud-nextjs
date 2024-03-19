'use client';

import React from 'react';
import { IsubTeamCard } from '../interface';

interface ICardColumnOne {
  card: IsubTeamCard;
}

const CardColumnOne = (props: ICardColumnOne) => {
  const { card } = props;

  const handleClick = (card: IsubTeamCard) => {
    const url = card.cta[0]?.href;

    const newTab = card.cta[0]?.newTab ? '_blank' : '_self';

    window.open(url, newTab);
  };

  return (
    <div className='card-container-col-1'>
      <label>
        <strong>21</strong> jobs available
      </label>

      <label className='title'>
        <span>{card.title}</span>
      </label>
      <p>{card.body}</p>

      <button onClick={() => handleClick(card)} className='btnWrapper'>
        {card.cta[0]?.text}
      </button>
    </div>
  );
};

export default CardColumnOne;
