'use client';

import { IsubTeamCard } from '../interface';

interface ISelector {
  item: IsubTeamCard;
  handleSelected: (index: number) => void;
  index: number;
  selected: number;
}

const Selector = (props: ISelector) => {
  const { item, handleSelected, index, selected } = props;
  return (
    <div onClick={() => handleSelected(index)} className='titleSelector'>
      <label className={`title ${selected === index && 'selectedItem'}`}>
        {item.title}
      </label>
    </div>
  );
};

export default Selector;
