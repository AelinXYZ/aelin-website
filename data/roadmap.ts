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
      title: 'V.1',
      bullets: [
        'lorem ipsum dolor sit',
        'lorem ipsum dolor sit',
        'lorem ipsum dolor sit',
      ],
    },
    id: 1,
  },
  {
    month: 'Feb 2022',
    isActive: 'active',
    version: {
      title: 'V1.1',
      bullets: [
        'lorem ipsum dolor sit',
        'lorem ipsum dolor sit',
        'lorem ipsum dolor sit',
      ],
    },
    id: 2,
  },
  {
    month: 'May 2022',
    isActive: 'upcoming',
    version: {
      title: 'V2',
      bullets: [
        'lorem ipsum dolor sit',
        'lorem ipsum dolor sit',
        'lorem ipsum dolor sit',
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
        'lorem ipsum dolor sit',
        'lorem ipsum dolor sit',
        'lorem ipsum dolor sit',
      ],
    },
    id: 4,
  },
];
