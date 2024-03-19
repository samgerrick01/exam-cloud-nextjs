'use client';

import React, { useState } from 'react';
import { IProps } from '@/src/interface';
import { CardComponent, Selector } from '.';

interface ITeamSelector {
  data: IProps;
}

const TeamSelector = (props: ITeamSelector) => {
  const { subTeamCard } = props.data;

  const [selected, setSelected] = useState<number>(0);

  const [selectedCard, setSelectedCard] = useState<any>(subTeamCard[selected]);

  const handleSelected = (index: number) => {
    setSelected(index);
    setSelectedCard(subTeamCard[index]);
  };

  return (
    <div className='teamSelector-container'>
      <div className='selector-container'>
        {subTeamCard.map((item, index) => (
          <Selector
            item={item}
            key={index}
            handleSelected={handleSelected}
            index={index}
          />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardComponent card={selectedCard} />
      </div>
    </div>
  );
};

export default TeamSelector;
