import React from 'react';
import { IsubTeamCard } from '../interface';

interface ISelector {
  item: IsubTeamCard;
  handleSelected: (index: number) => void;
  index: number;
}

const Selector = (props: ISelector) => {
  const { item, handleSelected, index } = props;
  return (
    <div onClick={() => handleSelected(index)} className='titleSelector'>
      <label className='title'>{item.title}</label>
    </div>
  );
};

export default Selector;
