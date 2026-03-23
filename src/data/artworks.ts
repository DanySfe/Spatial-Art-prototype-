export interface Artwork {
  id: string;
  title: string;
  artist: string;
  price: string;
  image: string;
  images?: string[];
  status: string;
  category: string;
  year: string;
  description?: string;
  modelSrc?: string;
  iosSrc?: string;
  extendedDetails?: {
    history: string;
    significance: string;
    exhibitions: string;
    conservation: string;
    acquisition: string;
    funFact: string;
  };
}

export const artworksData: Artwork[] = [
  {
    id: '1',
    title: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
    price: '$860,000,000',
    image: '/Spatial-Art-prototype-/monalisa_1.jpg',
    images: ['/Spatial-Art-prototype-/monalisa_1.jpg', '/Spatial-Art-prototype-/gold_frame.png'],
    status: 'AR Ready',
    category: 'Painting',
    year: '1503–1519',
    description: 'The Mona Lisa, also known as La Gioconda, is a half-length portrait by Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it is believed to depict Lisa Gherardini, the wife of Florentine merchant Francesco del Giocondo. The painting is renowned for the subject\'s mysteriously elusive expression, the monumentality of the composition, and the subtle modeling of forms and atmospheric illusionism. It has been housed in the Musée du Louvre in Paris since 1797 and is the most visited and most recognized painting in the world.',
    modelSrc: '/Spatial-Art-prototype-/monalisa.glb',
    iosSrc: '/Spatial-Art-prototype-/Monalisa.usdz',
    extendedDetails: {
      history: 'Commissioned by Florentine merchant Francesco del Giocondo around 1503, Leonardo da Vinci worked on the portrait for an estimated four years — and may have continued refining it for over a decade. It remained in Leonardo\'s personal possession until his death in 1519, when it passed to his pupil Salaí.',
      significance: 'The Mona Lisa introduced several revolutionary techniques to Western painting. The sfumato method — layers of translucent glazes creating smoke-like tonal blending — gave the subject a three-dimensional presence never before achieved. Her famously ambiguous expression changes depending on where your eyes focus, an effect created by how Leonardo rendered the corners of the mouth and eyes at different tonal depths.',
      exhibitions: 'Permanently displayed at the Musée du Louvre, Salle des États (Room 711), Paris. In 1963, it was the centerpiece of a diplomatic cultural exchange tour to the United States (Metropolitan Museum of Art, New York) and Japan in 1974 — its only major international exhibitions.',
      conservation: 'The painting shows signs of craquelure (ageing cracks) and was restored in 1809 and again in 1952. It is kept behind bulletproof glass in a climate-controlled enclosure at 20°C (68°F) and 50% humidity to prevent further deterioration. The poplar wood panel has shown some warping over the centuries.',
      acquisition: 'Acquired by King Francis I of France around 1530 and has been French royal property — then state property — ever since. Napoleon briefly moved it to his bedroom in 1800. It was stolen by Vincenzo Peruggia in 1911 and recovered in 1913 after a two-year worldwide sensation.',
      funFact: 'The Mona Lisa has no clearly visible eyebrows or eyelashes — though high-resolution scans suggest they were once present and may have faded over time. She also has no discernible horizon line behind her, making her appear to float above an impossibly dreamlike landscape.',
    }
  },
  {
    id: '2',
    title: 'The Thinker',
    artist: 'Auguste Rodin',
    price: '$15,300,000',
    image: '/Spatial-Art-prototype-/the_thinker_image.jfif',
    status: 'AR Ready',
    category: 'Sculpture',
    year: '1904',
    description: 'Originally conceived as part of Rodin\'s monumental work The Gates of Hell, The Thinker was intended to represent Dante Alighieri contemplating his great poem. The 186 cm bronze sculpture depicts a nude male figure seated on a rough stone, leaning forward with his right elbow on his left knee and his chin resting on the back of his right hand. Over 28 full-sized bronze casts exist around the world, with the original plaster at the Musée Rodin in Paris. It has become one of the most universally recognized symbols of philosophy and intellectual pursuit.',
    modelSrc: '/Spatial-Art-prototype-/the_thinker_by_auguste_rodin.glb',
    iosSrc: '/Spatial-Art-prototype-/the_thinker_by_auguste_rodin.usdz',
    extendedDetails: {
      history: 'The Thinker began as one figure in a larger work: The Gates of Hell, Rodin\'s monumental portal commissioned in 1880 for the planned Musée des Arts Décoratifs in Paris. It was originally titled "The Poet" and was intended to represent Dante gazing down at the underworld. The small-scale figure (70 cm) was later scaled to life-size (186 cm) and exhibited independently at the Salon of 1904.',
      significance: 'The sculpture transformed Western understanding of the human figure in bronze. Rodin rejected the idealized forms of Neoclassicism in favour of raw emotional tension — visible in the figure\'s twisted torso, clenched toes, and the way the right arm rests on the left knee, a deliberately anatomically unusual pose that creates maximum psychological intensity.',
      exhibitions: 'First exhibited as a large independent work at the 1904 Paris Salon. Today, more than 28 full-sized casts exist worldwide, with major installations at the Musée Rodin (Paris), Stanford University (California), the National Gallery of Art (Washington D.C.), and the Philadelphia Museum of Art.',
      conservation: 'Bronze naturally develops a green or brown patina over time. The Musée Rodin performs regular conservation assessments and light cleaning. Outdoor casts, such as the one at Stanford, require periodic treatment for environmental exposure. Some casts have been vandalized — including a bomb attack at the Cleveland Museum of Art in 1970.',
      acquisition: 'The original plaster model is held at the Musée Rodin, Paris. The French State acquired the rights to Rodin\'s work upon his death in 1917 through a bequest, allowing the museum to authorize new authorized casts. Each new bronze must be stamped and numbered, and no more than 12 authorized casts per sculpture are issued.',
      funFact: 'Despite the common association with "thinking," the original figure\'s pose is anatomically unusual — a right-handed person resting their chin on their right hand would naturally bend their elbow outward. Rodin instead has the figure rest their chin on the back of the right hand, creating an almost tormented internal tension throughout the entire body.',
    }
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
