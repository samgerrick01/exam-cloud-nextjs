'use client';

import React, { useState } from 'react';
import { IProps } from '@/src/interface';
import { CardComponent, Selector, SelectorModal } from '.';
import { FaChevronDown } from 'react-icons/fa';

interface ITeamSelector {
  data: IProps;
}

const TeamSelector = (props: ITeamSelector) => {
  const { subTeamCard } = props.data;

  const [selected, setSelected] = useState<number>(0);

  const [selectedCard, setSelectedCard] = useState<any>(subTeamCard[selected]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [selectedTitle, setSelectedTitle] =
    useState<string>('Select a sub-team');

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
            selected={selected}
          />
        ))}
      </div>

      <div className='mobile-selector'>
        <button
          onClick={() => {
            setModalOpen(true);
            console.log('clicked');
          }}
          className='btn'
        >
          {selectedTitle} <FaChevronDown />
        </button>
      </div>
      <SelectorModal
        isOpen={modalOpen}
        onClose={setModalOpen}
        data={subTeamCard}
        setSelectedTitle={setSelectedTitle}
        handleSelected={handleSelected}
      />

      <div className='content-selector'>
        {selectedTitle !== 'Select a sub-team' && (
          <CardComponent card={selectedCard} />
        )}
      </div>
    </div>
  );
};

export default TeamSelector;
