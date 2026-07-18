export interface Article {
  title: string;
  date: string;
  href: string;
}

export interface Publication {
  name: string;
  logo: string;
  blurb: string;
  allHref: string;
  articles: Article[];
}

export type BodyBlock =
  | { p: string; h?: never; img?: never; cap?: never }
  | { h: string; p?: never; img?: never; cap?: never }
  | { img: string; cap?: string; p?: never; h?: never };

export interface Post {
  slug: string;
  category: string;
  icon: string;
  date: string;
  dateISO: string | null;
  title: string;
  excerpt: string;
  image?: string;
  body: BodyBlock[];
}

export const PUBLICATIONS: Publication[] = [
  {
    name: 'Science News Explores',
    logo: '/assets/publications/science-news-explores.png',
    blurb: 'Making science and technology accessible to kids ages 12 and up.',
    allHref: 'https://www.snexplores.org/author/tejasri-gururaj',
    articles: [
      { title: 'Could a Star Wars lightsaber work?', date: 'Mar 30, 2026', href: 'https://www.snexplores.org/article/lightsaber-star-wars-physics' },
      { title: 'Energy may seem to disappear, but there’s a law against that', date: 'Jan 23, 2026', href: 'https://www.snexplores.org/article/conservation-energy-forms-law' },
      { title: 'How polarized and UV-blocking sunglasses protect our eyes', date: 'Aug 5, 2025', href: 'https://www.snexplores.org/article/polarized-uv-blocking-sunglasses' },
    ],
  },
  {
    name: 'Interesting Engineering',
    logo: '/assets/publications/interesting-engineering.png',
    blurb: 'Science and technology news covering the latest advancements and breakthroughs.',
    allHref: 'https://interestingengineering.com/author/tejasri-gururaj',
    articles: [
      { title: 'To fight deepfakes, researchers are building trust directly into camera chips', date: 'Jun 17, 2026', href: 'https://interestingengineering.com/ai-robotics/cryptographic-sensors-chips-deepfake-authentication' },
      { title: 'A humble fiber-optic cable could become the next moonquake detector', date: 'Jun 5, 2026', href: 'https://interestingengineering.com/science/moon-quakes-fiber-optic-cable-sensor' },
      { title: 'The US grid wasn’t built for this', date: 'Apr 24, 2026', href: 'https://interestingengineering.com/energy/ai-power-grid-data-centers-us' },
    ],
  },
  {
    name: 'Phys.org',
    logo: '/assets/publications/phys-org.png',
    blurb: 'A science, research and technology news aggregator covering scientific breakthroughs.',
    allHref: 'https://phys.org/search/?search=tejasri+gururaj&s=0',
    articles: [
      { title: 'Physicists demonstrate Hong–Ou–Mandel interference with more than 10 atoms', date: 'Jun 30, 2026', href: 'https://phys.org/news/2026-06-physicists-hongoumandel-atoms.html' },
      { title: 'Scientists find molecular-level evidence for two structures in liquid water', date: 'Jun 25, 2026', href: 'https://phys.org/news/2026-06-scientists-molecular-evidence-liquid.html' },
      { title: 'Warming unlocks ancient carbon in Tibetan permafrost, triggering climate tipping point', date: 'Jun 3, 2026', href: 'https://phys.org/news/2026-06-ancient-carbon-tibetan-permafrost-triggering.html' },
    ],
  },
  {
    name: 'The Hindu',
    logo: '/assets/publications/the-hindu.png',
    blurb: 'An English-language national newspaper in India, established in 1878.',
    allHref: 'https://www.thehindu.com/profile/author/Tejasri-Gururaj-20301/',
    articles: [
      { title: 'Miniature laser grown on silicon chip could revolutionise computing', date: 'Apr 15, 2025', href: 'https://www.thehindu.com/sci-tech/science/miniature-laser-grown-on-silicon-chip-could-revolutionise-computing/article69448304.ece' },
      { title: 'Scientists demonstrate clear quantum advantage using simple game', date: 'Apr 9, 2025', href: 'https://www.thehindu.com/sci-tech/science/quantum-advantage-odd-cycle-graph-two-qubits/article69407720.ece' },
      { title: 'A beginner’s guide to quantum computing | Explained', date: 'Dec 29, 2024', href: 'https://www.thehindu.com/sci-tech/science/a-beginners-guide-to-quantum-computing-explained/article69022446.ece' },
    ],
  },
];

export const OTHER_PUBS = [
  { name: 'MedicalXpress', logo: '/assets/publications/medicalxpress.png', href: 'https://medicalxpress.com/news/2024-12-cognitive-flexibility-neural-variability-decision.html' },
  { name: 'TechXplore', logo: '/assets/publications/techxplore.png', href: 'https://techxplore.com/news/2024-10-hydrogen-storage-infrastructure-lakes-reservoirs.html' },
  { name: 'Smore Science', logo: '/assets/publications/smore-science.png', href: 'https://www.smorescience.com/how-high-can-planes-fly/' },
  { name: 'Third Pole Environment', logo: '/assets/publications/third-pole.png', href: 'http://www.tpe.ac.cn/research/202303/t20230321_278058.html' },
];

export const POSTS: Post[] = [
  {
    slug: 'where-does-wind-begin',
    category: 'Physics',
    icon: '/assets/icons/climate.png',
    date: 'Oct 3, 2025',
    dateISO: '2025-10-03',
    title: 'Blog #1: Where does wind begin?',
    image: '/assets/blog/pinwheels.jpg',
    excerpt: "I honestly don't know where this came from. I think I read it somewhere, but it got me thinking. Wind is always there, but where does it start? Okay, this one may seem like a very stupid question. Or a very easy one — but the answer is more nuanced than that.",
    body: [
      { p: "I honestly don't know where this came from. I think I read it somewhere, but it got me thinking. Wind is always there, but where does it start?" },
      { p: "Okay, this one may seem like a very stupid question. Or a very easy one. Wind has something to do with the rotation of the Earth. But the answer seems to be more nuanced than that." },
      { p: "Let's first start with some basics." },
      { h: 'What is wind?' },
      { p: 'Wind is nothing but air that moves. But you might be thinking — air is invisible, how do we measure its movement?' },
      { p: "The answer is through its effects on objects. For example, you may have noticed a whirligig or pinwheel (pictured below) spinning faster when it's windier. The scientific instruments used for measuring air movements are known as wind vanes (for direction) and anemometers (for speed)." },
      { img: '/assets/blog/pinwheels.jpg', cap: 'A spinning pinwheel or whirligig. Credit: Nevit Dilmen.' },
      { p: 'So, wind = moving air. Awesome. But, how does air start moving?' },
      { h: 'The sun' },
      { p: 'While many factors influence the movement of wind, the main reason for its formation is the heat from the sun.' },
      { p: "Here's a simple flowchart to help understand how this works." },
      { img: '/assets/blog/wind-formation.png', cap: "Heating cycle of the Earth's surface. Credit: Created with Lucidchart." },
      { p: "The horizontal movement of the cold air to fill in the space left by the hot air is the origin of winds. Here's a visual representation of the same." },
      { img: '/assets/blog/heating-cycle.jpg', cap: 'Illustration of how winds are formed. Credit: Created using Gemini.' },
      { img: '/assets/blog/wind-map.jpg', cap: 'Left image: High and low pressure regions and airflow surrounding them. Right image: Air flows from high to low pressure regions, naturally. Credit: National Oceanic and Atmospheric Administration (NOAA).' },
      { p: 'This is where things get interesting.' },
      { p: "Nature doesn't like this imbalance and wants to reach a state of neutrality or equilibrium. Air naturally flows from high-pressure spots to low-pressure spots, working to even out the difference." },
      { p: 'This creates what meteorologists call a "pressure gradient," essentially a pressure difference between these regions. Here’s the thing: the sharper that pressure difference, the faster the air moves — and that’s what creates high-speed winds.' },
      { p: 'Picture pressure systems as hills and valleys. Air flows "downhill" from high to low pressure, just like water running down from a mountain into a valley.' },
      { p: "You might think that's it. The story ends here. But there's more to the story. The Earth's rotation and geography also have a role." },
      { h: 'Forces governing wind movement' },
      { p: "If air simply flowed straight from high-pressure areas to low-pressure areas, weather forecasting would be remarkably simple. We'd have predictable, straight-line winds, and storms would move in neat, orderly patterns." },
      { p: "But that's not what happens." },
      { p: 'What we get instead are spiraling hurricanes, curved jet streams, and elaborate wind patterns circling pressure zones. Why? Because three forces work together to govern how air actually moves across our planet.' },
      { p: "The pressure gradient force is what we've already discussed — the push that drives air from high to low pressure regions." },
      { p: "But the Earth doesn't sit still." },
      { p: "The Coriolis force arises because the planet spins. The air flows in straight lines while Earth rotates beneath it, bending the air's trajectory. In the Northern Hemisphere, moving air gets deflected to the right. In the Southern Hemisphere, it curves to the left." },
      { p: 'If you want a more detailed explanation of the Coriolis effect, you can check out this video.' },
      { img: '/assets/blog/satellite-swirl.jpg', cap: 'A strong storm from 2012 in Alaska illustrates the spiral patterns in low-pressure regions. Credit: NASA.' },
      { p: 'The result is that air spirals around low-pressure systems rather than flowing straight in — counterclockwise in the Northern Hemisphere and clockwise in the Southern. This is what gives hurricanes their spin.' },
      { h: 'Conclusion' },
      { p: "So, wind's origin? It all starts with the Sun." },
      { p: 'That gentle breeze you feel on a cool autumn evening and a hurricane wreaking havoc across towns are contrasting phenomena shaped by the exact same forces.' },
      { p: "They both begin with the sun heating Earth unevenly. Air flows from high to low pressure in both cases. Earth's rotation deflects them into characteristic patterns. And surface friction influences both." },
      { p: "The difference isn't in the physics — it's in the scale and intensity." },
      { p: 'A light breeze and a catastrophic storm obey identical rules; the difference is in the pressure gradients, scale, and energy involved. Understanding wind means recognizing all forms of wind are governed by the same fundamental laws.' },
      { p: "The next time you feel wind on your face or see a weather map, you'll know: it all begins 150 million kms away, with sunlight striking Earth's surface." },
    ],
  },
  {
    slug: 'prelude',
    category: 'Uncategorised',
    icon: '/assets/icons/write.png',
    date: 'Jul 1, 2025',
    dateISO: '2025-07-01',
    title: 'Prelude',
    excerpt: "What's this blog going to be about? Before I post the first blog, I thought it would be helpful to give people an idea of what to expect here. I want to take those random questions that pop into my head in the middle of the night, and find answers to them.",
    body: [
      { h: "What's this blog going to be about?" },
      { p: 'Before I post the first blog, I thought it would be helpful to give people an idea of what to expect here. I want to take those random questions that pop into my head in the middle of the night, and find answers to them.' },
      { p: 'For instance, "Where does wind begin?" which is the first one, or "Why can weather apps never seem to give accurate predictions?"' },
      { p: 'In essence, each blog post will attempt to find an answer to a question that is deeply rooted in science, because, well, science is everywhere!' },
      { p: "I don't aim to be very formal in my writing, sticking to a conversational tone. I will also try to include visuals, where and if possible. However, my drawing skills are very poor, so we shall see." },
      { p: "If there's a question whose answer would be interesting to break down, please let me know! I will do my best to answer it, although I may be slow getting to it." },
      { p: "Lastly, please avoid being rude or disrespectful. I have no tolerance for people who love leaving hurtful and unnecessary comments to get a kick out of it. This is a fun place to learn about science and the world together, so let's keep it that way." },
      { p: "If you think that I've made a mistake, please contact me! But present actual sources and concrete facts, and I will retract/make changes. Of course, I will do my due diligence to ensure that the information is factually correct. But, at the end of the day, I'm human too." },
      { p: 'See you in the first blog post!' },
    ],
  },
];

export const APPROACH = [
  { icon: '/assets/icons/collaboration.png', text: 'I collaborate with researchers, institutions, and industry experts to bring accuracy and depth in every story.' },
  { icon: '/assets/icons/research.png', text: 'I transform technical concepts and industry jargon into clear, compelling narratives.' },
  { icon: '/assets/icons/media.png', text: 'I transform research into engaging formats – from feature articles and press releases to videos and infographics.' },
];

export const STATS = [
  { icon: '/assets/icons/write.png', value: '250+', label: 'Articles written' },
  { icon: '/assets/icons/share.png', value: '50K+', label: 'Social media shares' },
  { icon: '/assets/icons/explainer.png', value: '3M+', label: 'Article views' },
];

export const BEATS = [
  { icon: '/assets/icons/quantum.png', title: 'Quantum & Particle Physics', q: 'How do subatomic particles behave? What happens inside particle accelerators?' },
  { icon: '/assets/icons/neuroscience.png', title: 'AI & Quantum Computing', q: 'How do we build computers atom by atom? Can AI really out-think humans?' },
  { icon: '/assets/icons/biology.png', title: 'Medical Science & Biotechnology', q: 'What’s the future of CRISPR? Can we build better artificial organs?' },
  { icon: '/assets/icons/climate.png', title: 'Energy & Climate Change', q: 'Is nuclear fusion close to reality? Can technology save our climate?' },
  { icon: '/assets/icons/astronomy.png', title: 'Cosmology & Astrophysics', q: 'Can we see inside black holes? What is dark matter and dark energy?' },
];

export const FEATURED = [
  { title: 'Could a Star Wars lightsaber work?', publication: 'Science News Explores', date: 'Mar 30, 2026', image: 'https://www.snexplores.org/wp-content/uploads/sites/3/2026/03/1440_TF_lightsabers_feat.png', href: 'https://www.snexplores.org/article/lightsaber-star-wars-physics' },
  { title: 'AlphaFold and the architecture that cracked protein structure', publication: 'Interesting Engineering', date: 'Dec 19, 2025', image: 'https://cms.interestingengineering.com/wp-content/uploads/2025/12/Untitled-1_4fdd5c.jpg', href: 'https://interestingengineering.com/science/deepmind-alphafold-protein-engineering' },
  { title: 'Human brain operates near, but not at, the critical point', publication: 'Phys.org', date: 'Mar 28, 2026', image: '/assets/featured/human-brain-critical.png', href: 'https://phys.org/news/2026-03-human-brain-critical.html' },
];

export const CATEGORY_TONE: Record<string, string> = {
  Physics: 'teal',
  Weather: 'gold',
  Uncategorised: 'clay',
};

export const catTone = (c: string) => CATEGORY_TONE[c] || 'soft';

export const categorySlug = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, '-');
