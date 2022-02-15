export type UsersInfoType = {
  user: 'sponsor' | 'investor';
  title: string;
  text: string;
  id: number;
}[];

export const usersInfo: UsersInfoType = [
  {
    user: 'sponsor',
    title: 'Create a pool',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 1,
  },
  {
    user: 'investor',
    title: 'Invest',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 2,
  },
  {
    user: 'sponsor',
    title: 'Find a deal',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 3,
  },
  {
    user: 'investor',
    title: 'Discover deal',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 4,
  },
  {
    user: 'sponsor',
    title: 'Get a fee',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 5,
  },
  {
    user: 'investor',
    title: 'Vest',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    id: 6,
  },
];
