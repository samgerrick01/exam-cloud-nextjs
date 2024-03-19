'use client';

import { IProps } from '@/src/interface';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { CardComponent, Selector, SelectorModal } from '.';

interface ITeamSelector {
  data: IProps;
}

const TeamSelector = (props: ITeamSelector) => {
  const { subTeamCard } = props.data;

  const [selected, setSelected] = useState<number>(0);

  const [selectedCard, setSelectedCard] = useState<any>(subTeamCard[selected]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [play, setPlay] = useState<boolean>(false);

  const [selectedTitle, setSelectedTitle] =
    useState<string>('Select a sub-team');

  const handleSelected = (index: number) => {
    setSelected(index);
    setSelectedCard(subTeamCard[index]);
    setPlay(false);
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
          }}
          className='btn'
        >
          {selectedTitle} {modalOpen ? <FaChevronUp /> : <FaChevronDown />}
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
        <div className='mobile'>
          {selectedTitle !== 'Select a sub-team' && (
            <CardComponent card={selectedCard} play={play} setPlay={setPlay} />
          )}
        </div>
        <div className='desktop'>
          <CardComponent card={selectedCard} play={play} setPlay={setPlay} />
        </div>
      </div>
    </div>
  );
};

export default TeamSelector;
