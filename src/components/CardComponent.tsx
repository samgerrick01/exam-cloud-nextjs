'use client';

import { motion } from 'framer-motion';
import { CardColumnOne, CardColumnTwo } from '.';
import { IsubTeamCard } from '../interface';

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
          className={`${card.video[0]?.video ? 'col-1' : 'col-1-1'}`}
        >
          <CardColumnOne card={card} />
        </motion.div>
        {card.video[0]?.video && (
          <div className='col-2'>
            <CardColumnTwo card={card} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
