'use client';

import React from 'react';
import { IsubTeamCard } from '../interface';
import { CardColumnOne, CardColumnTwo } from '.';
import { motion } from 'framer-motion';

interface ICardComponent {
  card: IsubTeamCard;
}

const CardComponent = (props: ICardComponent) => {
  const { card } = props;

  return (
    <div className='card-container'>
      <div className='card-content'>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
          className='col-1'
        >
          <CardColumnOne card={card} />
        </motion.div>
        <div className='col-2'>
          {card.video[0]?.video && <CardColumnTwo card={card} />}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
