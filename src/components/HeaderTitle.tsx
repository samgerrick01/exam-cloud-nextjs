'use client';

import { IProps } from '@/src/interface';

interface IHeaderTitle {
  data: IProps;
}

const HeaderTitle = (props: IHeaderTitle) => {
  const { subTeamsDescription, subteamsTitle } = props.data;

  return (
    <div className='headerContainer'>
      <div className='headerTitle'>
        <label className='headerText'>
          <span>{subteamsTitle}</span>
        </label>
        <p className='headerDesc'>{subTeamsDescription}</p>
      </div>
    </div>
  );
};

export default HeaderTitle;
