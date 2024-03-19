'use client';

import React from 'react';
import { IsubTeamCard } from '../interface';

import CloseIcon from '@/public/ExitCross.svg';
import Image from 'next/image';

interface ISelectorModal {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  data: IsubTeamCard[];
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
  handleSelected: (index: number) => void;
}

const SelectorModal = (props: ISelectorModal) => {
  return (
    <div className={`modal ${props.isOpen ? 'open' : ''}`}>
      <div className='modal-content'>
        <div className='header'>
          <label>Select a sub-team</label>
          <Image
            onClick={() => props.onClose(false)}
            priority
            src={CloseIcon}
            alt='Follow us on Twitter'
          />
        </div>
        <div className='modal-divider'></div>
        {props.data.map((item, index) => (
          <div
            onClick={() => {
              props.setSelectedTitle(item.title);
              props.onClose(false);
              props.handleSelected(index);
            }}
            key={index}
            className='modal-item'
          >
            <label>{item.title}</label>
            <div className='item-divider'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorModal;
