export interface ContentBlock {
  type: 'text' | 'image';
  content: string;
  caption?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string; // Format: "YYYY-MM-DD"
  excerpt: string;
  image: string; // Path to image
  slug: string; // URL-friendly identifier
  content: ContentBlock[]; // Array of content blocks
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Post-Pandemic City of Tomorrow Featured on designboom",
    date: "2020-11-02",
    excerpt: "O2 Design Atelier's visionary concept for a post-pandemic city, featuring elevated self-sustaining towers above regenerated nature, is published on designboom.",
    image: '/Gallery/Competition/CityofTmorrow/A1.avif',
    slug: "postpandemiccity",
    content: [
      {
        type: 'text',
        content: `O2 Design Atelier's conceptual proposal for "The Post-Pandemic City of Tomorrow" has been featured on the international platform designboom.`
      },
      {
        type: 'text',
        content: `The visionary project imagines elevated self-sustaining towers that allow forests and rivers below to regenerate naturally, addressing the urban destruction of nature accelerated by the global pandemic.`
      },
      {
        type: 'text',
        content: 'Read the full feature here <a href="https://www.designboom.com/architecture/o2-design-atelier-the-post-pandemic-city-of-tomorrow-11-02-2020/" target="_blank" rel="noopener noreferrer" class="underline hover:no-underline text-black/90">here</a>.',
      }
    ]
  },
  {
    id: 2,
    title: "Retro KFC at Uno Rivertree Featured on KL Foodie",
    date: "2020-11-02",
    excerpt: "The 1950s American-inspired KFC outlet designed by O2DA at Uno Rivertree, Bukit Raja, Klang, gains attention on KL Foodie.",
    image: '/Gallery/Commercial/KFCBukitRaja/CP.avif',
    slug: "unorivertreekfcklfoodie",
    content: [
      {
        type: 'text',
        content: `Our retro 1950s American diner-inspired KFC outlet at Uno Rivertree (Bukit Raja, Klang) has been spotlighted by KL Foodie.`
      },
      {
        type: 'text',
        content: `The design brings nostalgic charm to the fast-food experience with bold colours, classic signage, and vintage detailing.`
      },
      {
        type: 'text',
        content: `Read the full feature here: <a href="https://klfoodie.com/kfc-bukit-raja-klang-retro-design/" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">KL Foodie article</a>.`
      }
    ]
  },
  {
    id: 3,
    title: "Courtyard House Ranked in ArchDaily Top 100 Projects",
    date: "2020-11-01",
    excerpt: "The Courtyard House secures No. 9 spot in ArchDaily's weekly Top 100 Projects.",
    image: '',
    slug: "courtyardhousearchdailytop100",
    content: [
      {
        type: 'text',
        content: `O2 Design Atelier is proud to announce that the Courtyard House has been ranked No. 9 in ArchDaily's Top 100 Projects for the week.`
      },
      {
        type: 'text',
        content: `This recognition highlights the project's innovative reinterpretation of the traditional courtyard typology on a standard terrace lot, prioritising greenery, natural light, and cross ventilation.`
      },
      {
        type: 'text',
        content: `View the ranking here: <a href="https://www.archdaily.com/tag/top100/" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">ArchDaily Top 100</a>.`
      }
    ]
  },
  {
    id: 4,
    title: "Uno Rivertree Signature Featured in Sin Chew Daily",
    date: "2020-10-31",
    excerpt: "The Uno Rivertree commercial project is published in Sin Chew Daily.",
    image: "/Publications/sinchew_news.jpeg",
    slug: "unorivertreesinchewdaily",
    content: [
      {
        type: 'text',
        content: `The Uno Rivertree Signature project has been featured in Sin Chew Daily, showcasing O2DA's contemporary commercial design approach.`
      },
      {
        type: 'text',
        content: `Read the article here: <a href="https://www.sinchew.com.my/content/content_2368727.html" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">Sin Chew Daily</a>.`
      }
    ]
  },
  {
    id: 5,
    title: "Courtyard House Published in The Edge Malaysia",
    date: "2020-09-07",
    excerpt: "Courtyard House featured in City & Country section of The Edge Malaysia Weekly.",
    image: '/Gallery/Residential/CourtyardHouse/A1.avif',
    slug: "courtyardhousetheedgemarket",
    content: [
      {
        type: 'text',
        content: `The Courtyard House was prominently featured in The Edge Malaysia Weekly (7–13 September 2020) under the City & Country section.`
      },
      {
        type: 'text',
        content: `The article explores how the design works with nature, light, and spatial experience to create a serene tropical home.`
      },
      {
        type: 'text',
        content: `Read the article here: <a href="https://www.theedgemarkets.com/article/design-works-touch-nature-light-and-spatial-experience" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">The Edge Malaysia</a>.`
      }
    ]
  },
  {
    id: 6,
    title: "Courtyard House Featured in PropertyGuru's Green Homes List",
    date: "2020-08-26",
    excerpt: "Courtyard House included in PropertyGuru's '10 Green Homes in Malaysia that Prove Eco-Friendly Living is Possible'.",
    image: '/Gallery/Residential/CourtyardHouse/A12.avif',
    slug: "courtyardhousepropertyguru",
    content: [
      {
        type: 'text',
        content: `The Courtyard House has been selected by PropertyGuru as one of "10 Green Homes in Malaysia that Prove Eco-Friendly Living is Possible", aligned with rising sustainability trends in the property market.`
      },
      {
        type: 'text',
        content: `The feature highlights the project's passive design strategies, natural ventilation, and integration of greenery within an urban terrace lot.`
      },
      {
        type: 'text',
        content: `Read the article here: <a href="https://www.archdaily.com/783163/terrace-house-renovation-o2-design-atelier?ad_source=search&ad_medium=search_result_all" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">The Edge Malaysia</a>.`
      }
    ]
  },
  {
    id: 7,
    title: "Edric Choo Joins WAF Webinar on Post-COVID Architecture",
    date: "2020-01-01",
    excerpt: "Principal Edric Choo Poo Liang participates in World Architecture Festival's 'Asia - Life after COVID-19' panel discussion.",
    image: '/Publications/PostPandamicTalk.jpg',
    slug: "webinaro2dawaf",
    content: [
      {
        type: 'text',
        content: `Edric Choo Poo Liang represented O2 Design Atelier in the World Architecture Festival's Talking Architecture webinar series titled "Asia - Life after COVID-19".`
      },
      {
        type: 'text',
        content: `The panel brought together leading architects to discuss architectural responses and concerns in the post-pandemic era across Asia.`
      },
      {
        type: 'text',
        content: `Watch the webinar here: <a href="https://www.worldarchitecturefestival.com/talking-architecture-asia-life-after-covid-19" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">WAF Talking Architecture</a>.`
      }
    ]
  },
  {
    id: 8,
    title: "O2 Design Atelier Wins BUILD Award 2019",
    date: "2019-01-01",
    excerpt: "O2DA recognised as Best Contemporary Residential Architecture Studio 2019 - Malaysia by BUILD Magazine.",
    image: "/images/news/o2dabuildaward2019.jpg",
    slug: "o2dabuildaward2019",
    content: [
      {
        type: 'text',
        content: `O2 Design Atelier has been awarded "Best Contemporary Residential Architecture Studio 2019 - Malaysia" in BUILD Magazine's Architecture Awards.`
      },
      {
        type: 'text',
        content: `This international recognition celebrates the studio's excellence in contemporary residential design and commitment to quality architecture.`
      },
      {
        type: 'text',
        content: `View the award listing here: <a href="https://www.build-review.com/winners/o2-design-atelier/" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">BUILD Review Winners</a>.`
      }
    ]
  },
  {
    id: 9,
    title: "Kenya Orphanage Project Highly Commended at WAF 2017",
    date: "2017-11-15",
    excerpt: "One Heart Foundation Orphanage and Children Eco-Village receives 'Highly Commended' at World Architecture Festival 2017.",
    image: '/Gallery/Competition/KenyaOrph/A4.avif',
    slug: "kenyaorphanageworldnews",
    content: [
      {
        type: 'text',
        content: `The One Heart Foundation Orphanage and Children Eco-Village project by O2 Design Atelier received "Highly Commended" recognition in the Future Masterplanning Project category at World Architecture Festival 2017 in Berlin.`
      },
      {
        type: 'text',
        content: `The international jury acknowledged the project's thoughtful approach to community, sustainability, and child-centred design.`
      },
      {
        type: 'text',
        content: `Read the article here: <a href="https://www.theedgemarkets.com/article/design-works-touch-nature-light-and-spatial-experience" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">The Edge Malaysia</a>.`
      }
    ]
  },
  {
    id: 10,
    title: "Courtyard House Shortlisted for World Festival of Interiors 2017",
    date: "2017-11-15",
    excerpt: "Courtyard House becomes the only Malaysian project shortlisted for INSIDE World Festival of Interiors Awards (Residential Category).",
    image: '/Gallery/Residential/CourtyardHouse/A5.avif',
    slug: "courtyardhousethestar",
    content: [
      {
        type: 'text',
        content: `The Courtyard House was shortlisted for the 2017 INSIDE World Festival of Interiors Awards in the Residential category, making it the only Malaysian project to reach this international stage.`
      },
      {
        type: 'text',
        content: `The shortlist was announced during WAF 2017 in Berlin under the theme "Performance". The project was also covered by The Star and The Edge Malaysia.`
      },
      {
        type: 'text',
        content: `More rticles on <a href="https://www.theedgemarkets.com/article/design-works-touch-nature-light-and-spatial-experience" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">The Edge Malaysia</a> and <a href="https://www.thestar.com.my/lifestyle/culture/2017/11/10/global-architecture-awards" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">The Stars</a>.`
      }
    ]
  },
  {
    id: 11,
    title: "Courtyard House Detailed Feature on ArchDaily",
    date: "2017-01-01",
    excerpt: "In-depth publication of the Courtyard House on ArchDaily, showcasing its innovative tropical courtyard design.",
    image: '/Gallery/Residential/CourtyardHouse/A2.avif',
    slug: "courtyardhousearchdaily",
    content: [
      {
        type: 'text',
        content: `ArchDaily published a comprehensive feature on the Courtyard House in Sungai Buloh, Malaysia.`
      },
      {
        type: 'text',
        content: `Built on a standard 22’x75’ terrace lot, the house reimagines the traditional courtyard typology with a central double-height courtyard filled with greenery, natural light through polycarbonate roofing, excellent cross ventilation, and prioritisation of garden space over parking.`
      },
      {
        type: 'text',
        content: `Read the article here: <a href="https://www.archdaily.com/783163/terrace-house-renovation-o2-design-atelier?ad_source=search&ad_medium=search_result_all" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">Arch Daily</a>.`
      }
    ]
  },
  {
    id: 12,
    title: "A Home for 2 Featured on ArchDaily",
    date: "2017-01-01",
    excerpt: "Interior renovation project 'A Home for 2' published on ArchDaily, highlighting flexible and fluid spatial design.",
    image: '/Gallery/Residential/Homefor2/CP.avif',
    slug: "ahomefor2archdaily",
    content: [
      {
        type: 'text',
        content: `ArchDaily featured "A Home for 2", an interior revamp project in northern Kuala Lumpur designed for two occupants.`
      },
      {
        type: 'text',
        content: `Preserving the original facade, the interior was transformed with fluid ground-floor spaces, cross ventilation, a courtyard garden, flexible rooms (including a multipurpose guest space), and a striking vertical wave-pattern metal screen at the entrance.`
      },
      {
        type: 'text',
        content: `The project reflects close collaboration between client and designer to create personalised, adaptable living spaces.`
      },
      {
        type: 'text',
        content: `Read the article here: <a href="https://www.archdaily.com/905911/a-home-for-2-o2-design-atelier?ad_source=search&ad_medium=search_result_all" target="_blank" rel="noopener" class="underline hover:no-underline text-black/90">Arch Daily</a>.`
      }
    ]
  }
];