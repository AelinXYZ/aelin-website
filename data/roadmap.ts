export type Roadmap = {
  month: string;
  isActive: boolean;
  version: {
    title: string;
    bullets: string[];
  };
  id: number;
}[];

export const roadmap: Roadmap = [
  {
    month: 'Sept 2021',
    isActive: false,
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
    isActive: true,
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
    isActive: false,
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
    isActive: false,
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
