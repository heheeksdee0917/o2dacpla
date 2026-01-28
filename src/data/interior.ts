import type { Project } from './mockData';

export const interiorProjects: Project[] = [

  // 1. Brownstone Residence
  {
    id: 1,
    slug: 'brownstone-residence',
    title: 'Brownstone Residence',
    location: 'Bukit Damansara, Kuala Lumpur',
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
      { type: 'text', content: 'Quartz occupies a difficult but familiar condition in Cheras: a large parcel read primarily at speed, framed by main highways and a surrounding fabric of incremental urban blocks. In this context, the project treats the podium not as a closed retail plinth, but as a new piece of civic ground—an inhabited terrain that can slow the site down, gather people, and give the towers a legible base beyond image-making.' },
      { type: 'text', content: 'The concept begins with a deliberate inversion. Rather than letting the mall dominate the street edge, the retail volume is lifted and hollowed to release a generous public plaza beneath—an urban “crater” that becomes the project’s primary address. From this void, a network of plaza streets is cut through the massing, establishing clear pedestrian desire lines and a principal axis oriented toward the city’s skyline. Above, the towers rise as a ring of crystalline shards: their outward faces are clean and glossy, while the inward faces thicken and roughen, as if the development has been carved from a single mineral body—polished at the perimeter, cavernous within. This duality is reinforced materially: a cutting-edge external envelope frames the skyline, while the interior condition hints at rustic, masonry-like depth.' },
      { type: 'text', content: 'The spatial sequence follows the same logic of compression and release. Arrival from the highway is choreographed into a calmer, enlarged threshold where the ground plane opens into the main plaza. Retail drop-off occurs at a faceted, gold-toned crystalline portal set behind a veil-like white screen, turning the act of entry into a moment of spectacle while maintaining climatic shade and visual porosity. Separate hotel and residential arrivals are expressed as their own “crystal rooms”—glazed, angular volumes held beneath a lifted soffit—so the mixed-use programme reads as a set of distinct lobbies stitched to a shared public ground.' },
      { type: 'text', content: 'Vertical life is organised as a gradient of community. Green terraces are carved from the tower façades as habitable voids—pockets for planting, outdoor rooms, and relief within the high-rise section. At the upper levels, bridges extend between towers as infrastructural gardens, creating elevated shortcuts and shared amenities in the sky. This culminates in a ring-shaped promenade and sky pool, a suspended horizon that gathers the project’s residents into a single, continuous landscape above the city.' },
      { type: 'text', content: 'Quartz therefore positions density as an experiential terrain: a development shaped as much by the public void it gives back as by the height it claims—crystalline in silhouette, but grounded in a clear sequence of streets, thresholds, gardens, and shared civic space.' },
    ],
  },
   // 5. Sentul Works
   {
    id: 5,
    slug: 'sentul-works-id',
    title: 'Sentul Works',
    location: 'Taman Desa, Kuala Lumpur',
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
