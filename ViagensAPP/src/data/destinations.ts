export interface Destination {
  id: string;
  country: string;
  city: string;
  description: string;
  longDescription: string;
  emoji: string;
  color: string;
  accentColor: string;
  rating: number;
  temperature: string;
  language: string;
  currency: string;
  images: string[];
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: '1',
    country: 'Angola',
    city: 'Luanda',
    description: 'Onde o Atlântico beija a savana africana',
    longDescription:
      'Angola é um país de contrastes deslumbrantes, onde a modernidade de Luanda convive com paisagens naturais de tirar o fôlego. Das praias paradisíacas às cataratas do Kalandula, é um destino que surpreende.',
    emoji: '🌍',
    color: '#CC0000',
    accentColor: '#FFD700',
    rating: 4.3,
    temperature: '26°C',
    language: 'Português',
    currency: 'Kwanza (AOA)',
    images: [
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
    ],
    highlights: ['Cataratas do Kalandula', 'Praias de Luanda', 'Parque Nacional da Kissama', 'Cidade Velha'],
  },
  {
    id: '2',
    country: 'Espanha',
    city: 'Barcelona',
    description: 'Arte, arquitetura e paixão mediterrânea',
    longDescription:
      'Espanha pulsa com energia inigualável — do flamenco andaluz às obras de Gaudí em Barcelona. Um país onde cada região tem sua própria identidade, sabores únicos e paisagens que vão dos Pirineus às costas douradas.',
    emoji: '🇪🇸',
    color: '#AA151B',
    accentColor: '#F1BF00',
    rating: 4.8,
    temperature: '22°C',
    language: 'Espanhol',
    currency: 'Euro (EUR)',
    images: [
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800',
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
    ],
    highlights: ['Sagrada Família', 'Parque Güell', 'Alhambra', 'Las Ramblas'],
  },
  {
    id: '3',
    country: 'França',
    city: 'Paris',
    description: 'A cidade luz que inspira o mundo',
    longDescription:
      'França é sinônimo de elegância, gastronomia e cultura. Paris encanta com a Torre Eiffel e o Louvre, mas o país vai muito além — da Riviera Francesa aos campos de lavanda da Provença, cada canto é uma obra-prima.',
    emoji: '🇫🇷',
    color: '#002395',
    accentColor: '#ED2939',
    rating: 4.9,
    temperature: '18°C',
    language: 'Francês',
    currency: 'Euro (EUR)',
    images: [
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?w=800',
    ],
    highlights: ['Torre Eiffel', 'Museu do Louvre', 'Palácio de Versalhes', 'Provença'],
  },
  {
    id: '4',
    country: 'Brasil',
    city: 'Rio de Janeiro',
    description: 'Samba, natureza e alegria sem fim',
    longDescription:
      'O Brasil é a terra da diversidade — das praias do Rio às florestas da Amazônia, dos ritmos do Nordeste à modernidade de São Paulo. Um país de dimensões continentais com uma hospitalidade que conquista qualquer viajante.',
    emoji: '🇧🇷',
    color: '#009C3B',
    accentColor: '#FEDF00',
    rating: 4.7,
    temperature: '28°C',
    language: 'Português',
    currency: 'Real (BRL)',
    images: [
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
      'https://images.unsplash.com/photo-1544989164-31e2be9be534?w=800',
      'https://images.unsplash.com/photo-1529928520614-7bcb37b5e1ba?w=800',
    ],
    highlights: ['Cristo Redentor', 'Floresta Amazônica', 'Foz do Iguaçu', 'Chapada Diamantina'],
  },
  {
    id: '5',
    country: 'Coreia do Norte',
    city: 'Pyongyang',
    description: 'O país mais misterioso do mundo',
    longDescription:
      'A Coreia do Norte é o destino mais enigmático do planeta. Pyongyang impressiona com sua arquitetura monumental e organização impecável. Uma experiência única, diferente de qualquer outro lugar no mundo.',
    emoji: '🇰🇵',
    color: '#024FA2',
    accentColor: '#BE0029',
    rating: 3.8,
    temperature: '14°C',
    language: 'Coreano',
    currency: 'Won Norte-coreano (KPW)',
    images: [
      'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800',
    ],
    highlights: ['Arco do Triunfo', 'Torre do Juche', 'Mausoléu Kumsusan', 'Praça Kim Il-sung'],
  },
];
