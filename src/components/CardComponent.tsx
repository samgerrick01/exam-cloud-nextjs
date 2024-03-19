'use client';

import { motion } from 'framer-motion';
import { CardColumnOne, CardColumnTwo } from '.';
import { IsubTeamCard } from '../interface';
import playBtn from '@/public//play-btn.svg';
import Image from 'next/image';
import { useState } from 'react';

interface ICardComponent {
  card: IsubTeamCard;
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardComponent = (props: ICardComponent) => {
  const { card, play, setPlay } = props;

  const handlePlay = () => {
    setPlay(true);
  };

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
          {!play && (
            <div className='imgWrapper'>
              <Image
                className='img1'
                src={card.video[0]?.placeholder?.url}
                alt={card.video[0]?.placeholder?.alt}
                width={600}
                height={450}
              />
              {card.video[0].video && (
                <Image
                  onClick={handlePlay}
                  className='img2'
                  src={playBtn}
                  alt='play'
                />
              )}
            </div>
          )}

          {play && card.video[0]?.video?.url && <CardColumnTwo card={card} />}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
