export interface IOfferData {
  id: number;
  imageSrc: string;
  origin: string;
  name: string;
  price: string;
  oldPrice: string;
}

export const offerData: IOfferData[] = [
  {
    id: 1,
    imageSrc:
      'https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'რქაწითელი',
    origin: 'ზედამო',
    oldPrice: '32₾',
    price: '24₾',
  },
  {
    id: 2,
    imageSrc:
      'https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2luZSUyMGJvdHRsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'საფერავი',
    origin: 'მარბანი',
    oldPrice: '36₾',
    price: '32₾',
  },
  {
    id: 3,
    imageSrc:
      'https://images.unsplash.com/photo-1592119748016-a61c40a44320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'რქაწითელი',
    origin: 'ლუკას მარანი',
    oldPrice: '23₾',
    price: '18₾',
  },
];
