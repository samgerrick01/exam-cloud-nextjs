export interface IProps {
  subteamsTitle: string;
  subTeamsDescription: string;
  subTeamCard: IsubTeamCard[];
}

export interface IsubTeamCard {
  title: string;
  body: string;
  cta: [
    {
      newTab: boolean;
      href: string;
      text: string;
    }
  ];
  video: [
    {
      video: {
        url: string;
        title: string;
      };
      placeholder: {
        url: string;
        alt: string;
      };
      label: string;
    }
  ];
}
