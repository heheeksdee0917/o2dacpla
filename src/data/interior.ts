import { getOptimizedImage } from '../utils/cloudinary';
import type { Project } from './mockData';

export const interiorProjects: Project[] = [

  // 1. Brownstone Residence
  {
    id: 1,
    slug: 'brownstone-residence',
    title: 'Brownstone Residence',
    location: 'Bukit Damansara, Kuala Lumpur',
    year: '2022',
    category: 'Interior',
    status: 'N/A',
    projectTeam: ['Edric Choo Poo Liang', 'Kong Xiang Lynn', 'Lim Min Syn'],
    images: [
      '/Gallery/Interior/Brownstone/CP.avif',
      '/Gallery/Interior/Brownstone/A1.avif',
      '/Gallery/Interior/Brownstone/A2.avif',
      '/Gallery/Interior/Brownstone/A3.avif',
      '/Gallery/Interior/Brownstone/A4.avif',
      '/Gallery/Interior/Brownstone/A5.avif',
    ],
    detailContent: [
      {
        type: 'text',
        content: 'A calm, tactile palette anchors the interiors, where water, greenery, and warm materials shape a continuous sense of retreat. The courtyard becomes a quiet lung for the home, its stepped pool and timber screens cooling the adjoining spaces. Inside, soft lighting, layered shelving, and generous seating create a living area that feels collected yet effortless. The master suite extends this tone—darkened ceilings, copper accents, and large stone surfaces establishing a slow, intimate atmosphere. Across all rooms, the design balances openness with grounded textures, forming a residence that moves gently between lush exterior pockets and refined interior calm.'
      },
    ],
  },

  // 2. Cafe 100
  {
    id: 2,
    slug: 'cafe-100',
    title: 'Cafe 100',
    location: 'Taman Desa, Kuala Lumpur',
    year: '2022',
    category: 'Interior',
    status: 'N/A',
    projectTeam: ['Edric Choo Poo Liang', 'Kong Xiang Lynn'],
    images: [
      '/Gallery/Interior/Cafe100/CP.avif',
      '/Gallery/Interior/Cafe100/A1.avif',
      '/Gallery/Interior/Cafe100/A2.avif',
      '/Gallery/Interior/Cafe100/A3.avif',
      '/Gallery/Interior/Cafe100/A4.avif',
      '/Gallery/Interior/Cafe100/A5.avif',
      '/Gallery/Interior/Cafe100/A6.avif',
      '/Gallery/Interior/Cafe100/A7.avif',
      '/Gallery/Interior/Cafe100/A8.avif',
    ],
    detailContent: [
      {
        type: 'text',
        content: 'Cafe 100 plays with a lightweight grid framework against a vivid coral shell, creating a porous threshold between street and interior. Wireframe furniture, pixel-like signage, and exposed service elements give the space a playful, digital tactility. The café reads as an open lattice of volumes—part social lounge, part constructed drawing—where colour, mesh, and shadow animate a simple rectangular frontage into an energetic urban pocket.'
      },
    ],
  },
  // 3. Dharma
  {
    id: 3,
    slug: 'dharma',
    title: 'Dharma',
    location: 'Taman Desa, Kuala Lumpur',
    year: '2022',
    category: 'Interior',
    status: 'N/A',
    projectTeam: ['Edric Choo Poo Liang', 'Kong Xiang Lynn'],
    images: [
      '/Gallery/Interior/Dharma/CP.avif',
      '/Gallery/Interior/Dharma/A1.avif',
      '/Gallery/Interior/Dharma/A2.avif',
      '/Gallery/Interior/Dharma/A3.avif',
      '/Gallery/Interior/Dharma/A4.avif',
      '/Gallery/Interior/Dharma/A5.avif',
      '/Gallery/Interior/Dharma/A6.avif',
      '/Gallery/Interior/Dharma/A7.avif',
    ],
    detailContent: [
      {
        type: 'text',
        content: 'The temple’s interior is designed as a calm, contemporary meditation environment defined by light, natural materials, and soft illumination. The entrance and lobby use clean lines, timber surfaces, and a restrained palette to create an atmosphere of stillness. A circular altar backdrop, tatami-like floor grid, and integrated shelving keep the space orderly and serene.'
      },
      {
        type: 'text',
        content: 'Feature elements such as the prayer-light wall introduce subtle, symbolic lighting. The main hall is spacious and quiet, with timber flooring and a sculpted ceiling centered on a large elliptical light that evokes an open sky. Throughout, the design emphasises clarity, warmth, and contemplative focus.'
      },
    ],
  },
  // 4. Quartz - ID
  {
    id: 4,
    slug: 'quartz-id',
    title: 'Quartz ID',
    location: 'Taman Desa, Kuala Lumpur',
    year: '2022',
    category: 'Interior',
    status: 'N/A',
    projectTeam: ['Edric Choo Poo Liang', 'Kong Xiang Lynn'],
    images: [
      '/Gallery/Interior/QuartzID/CP.avif',
      '/Gallery/Interior/QuartzID/A1.avif',
      '/Gallery/Interior/QuartzID/A2.avif',
      '/Gallery/Interior/QuartzID/A3.avif',
      '/Gallery/Interior/QuartzID/A4.avif',
      '/Gallery/Interior/QuartzID/A5.avif',
      '/Gallery/Interior/QuartzID/A6.avif',
    ],
    detailContent: [
      {
        type: 'text',
        content: 'The interiors of Quartz Residence translate the tower’s crystalline, sculptural architecture into calm, refined living spaces. Tall glazing anchors each unit to sweeping valley views, while clean planes of stone, timber, and metal echo the tower’s angular geometry in a softer, more habitable form.'
      },
      {
        type: 'text',
        content: 'Curved staircases, layered wall panels, and linear lighting introduce fluidity within the otherwise precise spatial framework. Master suites open to lush terrace gardens, extending the tower’s elevated landscape directly into the home. Across all unit types, the design language remains consistent: disciplined geometry, quiet luxury, and a seamless dialogue between bold architecture and serene interiors.'
      },
    ],
  },
   // 5. Sentul Works
   {
    id: 5,
    slug: 'sentul-works-id',
    title: 'Sentul Works',
    location: 'Taman Desa, Kuala Lumpur',
    year: '2022',
    category: 'Interior',
    status: 'N/A',
    projectTeam: ['Edric Choo Poo Liang', 'Kong Xiang Lynn'],
    images: [
      '/Gallery/Interior/SentulWorksID/CP.avif',
      '/Gallery/Interior/SentulWorksID/A1.avif',
      '/Gallery/Interior/SentulWorksID/A2.avif',
      '/Gallery/Interior/SentulWorksID/A3.avif',
      '/Gallery/Interior/SentulWorksID/A4.avif',
      '/Gallery/Interior/SentulWorksID/A5.avif',
      '/Gallery/Interior/SentulWorksID/A6.avif',
      '/Gallery/Interior/SentulWorksID/A7.avif',
      '/Gallery/Interior/SentulWorksID/A8.avif',
    ],
    detailContent: [
      {
        type: 'text',
        content: 'This adaptive reuse project transforms the former Federated Malay States Railways Headquarters into a contemporary office while honoring its colonial industrial heritage. The original brick arches, load-bearing walls, and rhythm of tall windows are meticulously preserved, forming the historical backbone of the interior. New insertions—black steel portal frames, exposed mechanical ducts, and polished concrete flooring—are expressed with deliberate clarity to contrast yet complement the historic shell.'
      },
      {
        type: 'text',
        content: 'Light timber service volumes and glass-lined mezzanines are introduced as precise, modern layers that sit respectfully within the old structure, maintaining openness and legibility. Feature elements, including the glowing red staircase, pop-out balcony overlooking the park, and the revitalised double-height atrium with its classical arches and chandeliers, create memorable spatial moments.'
      },
      {
        type: 'text',
        content: 'The resulting design balances historic gravitas with contemporary industrial refinement—robust, honest, and spatially generous, offering a new chapter of use while celebrating the building’s railway legacy.'
      },
    ],
  },
];
