'use client';

import { IsubTeamCard } from '../interface';

interface ICardColumnOne {
  card: IsubTeamCard;
}

const CardColumnOne = (props: ICardColumnOne) => {
  const { card } = props;

  const handleClick = (card: IsubTeamCard) => {
    const url = card.cta[0]?.href;

    const newTab = card.cta[0]?.newTab ? '_blank' : '_self';

    window.open(url, newTab);
  };

  const jobsCount = (card: IsubTeamCard) => {
    let count = 0;
    switch (card.title) {
      case 'Architecture & Technical Analysis':
        count = 5;
        break;
      case 'Cyber Security':
        count = 11;
        break;
      case 'Data':
        count = 6;
        break;
      case 'Design':
        count = 4;
        break;
      case 'Product Management':
        count = 8;
        break;
      case 'Programme and Project Management':
        count = 5;
        break;
      case 'Software Engineering':
        count = 28;
        break;
      case 'Solutions Testing':
        count = 3;
        break;
      default:
        count = 0;
    }
    return count;
  };

  return (
    <div className='card-container-col-1'>
      <label style={{ fontSize: '16px' }}>
        <strong>{jobsCount(card)}</strong> jobs available
      </label>

      <label className='title'>
        <span>{card.title}</span>
      </label>
      <p>{card.body}</p>

      <button onClick={() => handleClick(card)} className='btnWrapper'>
        {card.cta[0]?.text}
      </button>
    </div>
  );
};

export default CardColumnOne;
