export interface Artwork {
  id: string;
  title: string;
  artist: string;
  price: string;
  image: string;
  status: string;
  category: string;
  year: string;
  description?: string;
}

export const artworksData: Artwork[] = [
  {
    id: '1',
    title: 'Venus de Milo',
    artist: 'Alexandros of Antioch',
    price: '$12,500',
    image: 'https://images.unsplash.com/photo-1769765745515-cb004c7fb2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBzY3VscHR1cmUlMjBtdXNldW18ZW58MXx8fHwxNzcxMTM2MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'AR Ready',
    category: 'Sculpture',
    year: '130 BC',
    description: 'Ancient Greek sculpture depicting the goddess Aphrodite',
  },
  {
    id: '2',
    title: 'Abstract Composition',
    artist: 'Unknown Contemporary',
    price: '$3,200',
    image: 'https://images.unsplash.com/photo-1703936205356-11814e31bfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwbW9kZXJuJTIwYXJ0fGVufDF8fHx8MTc3MTE3NjQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'New',
    category: 'Painting',
    year: '2024',
    description: 'Contemporary abstract piece with vibrant colors',
  },
  {
    id: '3',
    title: 'Portrait in Oil',
    artist: 'Classical Master',
    price: '$8,900',
    image: 'https://images.unsplash.com/photo-1741805190435-245072a87e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMHBvcnRyYWl0JTIwYXJ0fGVufDF8fHx8MTc3MTE3NjQzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'AR Ready',
    category: 'Painting',
    year: '1890',
    description: 'Classical oil portrait from the 19th century',
  },
  {
    id: '4',
    title: 'Modern Form',
    artist: 'Contemporary Artist',
    price: '$15,000',
    image: 'https://images.unsplash.com/photo-1759395162380-3f979d9272ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBzY3VscHR1cmUlMjB3aGl0ZXxlbnwxfHx8fDE3NzExNzY0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'AR Ready',
    category: 'Sculpture',
    year: '2023',
    description: 'Modern sculptural form in white marble',
  },
  {
    id: '5',
    title: 'Impressionist Landscape',
    artist: 'French School',
    price: '$6,750',
    image: 'https://images.unsplash.com/photo-1765814142756-ea0dfa141bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbXByZXNzaW9uaXN0JTIwbGFuZHNjYXBlJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzcxMTc2NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'New',
    category: 'Painting',
    year: '1885',
    description: 'French impressionist landscape with vibrant colors',
  },
  {
    id: '6',
    title: 'Installation Piece',
    artist: 'Modern Collective',
    price: '$22,000',
    image: 'https://images.unsplash.com/photo-1765376232529-a1aff86c6b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxMTc2NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'AR Ready',
    category: 'Installation',
    year: '2024',
    description: 'Contemporary installation art piece',
  },
  {
    id: '7',
    title: 'The Golden Hour',
    artist: 'Renaissance Master',
    price: '$45,000',
    image: 'https://images.unsplash.com/photo-1572625259591-a99f7ff63a9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5haXNzYW5jZSUyMHBhaW50aW5nJTIwbXVzZXVtfGVufDF8fHx8MTc3MTE3NzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'AR Ready',
    category: 'Painting',
    year: '1520',
    description: 'A masterpiece from the Italian Renaissance period',
  },
];

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworksData.find(artwork => artwork.id === id);
};
