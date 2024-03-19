'use client';

import React from 'react';
import { IsubTeamCard } from '../interface';
import { CardColumnOne, CardColumnTwo } from '.';

interface ICardComponent {
  card: IsubTeamCard;
}

const CardComponent = (props: ICardComponent) => {
  const { card } = props;

  return (
    <div className='card-container'>
      <div className='card-content'>
        <div className='col-1'>
          <CardColumnOne card={card} />
        </div>
        <div className='col-2'>
          {card.video[0]?.video && <CardColumnTwo card={card} />}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
