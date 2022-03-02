export type RoadmapType = {
  month: string;
  isActive: 'previous' | 'active' | 'upcoming';
  version: {
    title: string;
    bullets: string[];
  };
  id: number;
}[];

export const roadmap: RoadmapType = [
  {
    month: 'Sept 2021',
    isActive: 'previous',
    version: {
      title: 'ALPHA',
      bullets: [
        'SNX ecosystem distribution',
        'Council election',
        'First Aelin pool',
      ],
    },
    id: 1,
  },
  {
    month: 'Feb 2022',
    isActive: 'active',
    version: {
      title: 'V1',
      bullets: ['Updated homepage', 'Pool 1/Pool 2', 'UI/UX improvements'],
    },
    id: 2,
  },
  {
    month: 'May 2022',
    isActive: 'upcoming',
    version: {
      title: 'V2',
      bullets: [
        'Brand new dAPP',
        'Mobile friendly interface',
        'Automated crosschain deal claiming',
      ],
    },
    id: 3,
  },
  {
    month: 'End 2022',
    isActive: 'upcoming',
    version: {
      title: 'V3',
      bullets: [
        'Governance updates',
        'New deal structure',
        'More vesting schedules',
      ],
    },
    id: 4,
  },
];
