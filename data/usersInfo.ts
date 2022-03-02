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
    text: 'The sponsor starts the process by creating a pool investors can deposit funds into for a potential deal',
    id: 1,
  },
  {
    user: 'investor',
    title: 'Invest',
    text: 'Investors deposit funds into the sponsor’s pool and then wait for a deal to be found',
    id: 2,
  },
  {
    user: 'sponsor',
    title: 'Find a deal',
    text: 'The sponsor seeks a counter party and then negotiates a deal with them on behalf on the investors in the pool',
    id: 3,
  },
  {
    user: 'investor',
    title: 'Discover deal',
    text: 'Once a deal has been agreed upon, the sponsor presents it to the investors in the pool. If an investor does not like the deal, they may withdraw their funds without paying a fee',
    id: 4,
  },
  {
    user: 'sponsor',
    title: 'Get a fee',
    text: 'When an investor accepts a deal, they receive a claim on the deal token which may or may not have a vesting schedule. The investor also pays a fee to both the sponsor and the protocol upon acceptance',
    id: 5,
  },
  {
    user: 'investor',
    title: 'Vest',
    text: 'Each deal comes with an optional vesting schedule negotiated by the sponsor and the counter party. At the end of the vesting cliff + period the investors may claim their deal tokens',
    id: 6,
  },
];
