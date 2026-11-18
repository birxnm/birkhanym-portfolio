// All site content lives here. Edit text, links and image file names in one place.
// Images are read from /public/images/<file>. Missing files show a labelled placeholder.

export const profile = {
  name: 'Birkhanym Kazhymukhamet',
  tagline: 'AI Engineer with a strong taste in design.',
  sub: 'Founder of Back2Roots, CTO at QazaqArt, CPO at CortexAI.',
  badge: 'IT Queen KZ finalist · Top 10 of 100+ applicants',
  socials: [
    { label: 'Instagram', handle: '@1xnym_', href: 'https://instagram.com/1xnym_' },
    { label: 'Telegram', handle: '@birxnm', href: 'https://t.me/birxnm' },
    { label: 'GitHub', handle: 'github.com/birxnm', href: 'https://github.com/birxnm' },
  ],
  email: 'k.birkhanym@gmail.com',
}

export const nextEvent = {
  script: 'See you at',
  head: 'Soul Camp',
  meta: 'Almaty · November 21–22 · Tech track',
  line: "Let's build something beautiful together.",
}

// Projects that get a folder on the "Projects I build" screen, in order.
export const folderSlugs = ['back2roots', 'cortexai', 'qazaqart', 'shainote', 'enactus']

export const projects = {
  back2roots: {
    folder: { title: 'Back2Roots', sub: 'Research to startup' },
    script: 'Deep tech',
    head: 'Back2Roots',
    hook: 'A deep-tech project that grew from a robotics research lab into a startup.',
    story: [
      {
        step: 'Step 1 · Research',
        title: 'IEEE Robotics FabLab, AITU',
        meta: 'Dec 2024 – Oct 2025 · Research assistant',
        body: 'A new robotics lab, and I was the only first-year student on the team. We built a Kazakh-speaking holographic AI avatar for VR education: speech-to-text, text-to-speech and a RAG question-answering module, tested in Unreal Engine with NVIDIA Audio2Face.',
      },
      {
        step: 'Step 2 · Startup',
        title: 'Back2Roots',
        meta: 'June – Oct 2025 · Founder & full-stack developer',
        body: 'I took the idea to the Meta Llama Accelerator: an AI city-guide avatar for Astana built on Llama and KazLLM, with RAG and a real-time speech interface. 2nd of 1,800 teams (top 0.11%) and 500,000 KZT.',
      },
    ],
    pics: [
      { file: 'fablab.jpg', label: 'FabLab', ratio: 4 / 3, rot: 3 },
      { file: 'back2roots-app.jpg', label: 'Back2Roots app', ratio: 1.8, rot: -3 },
      { file: 'llama-certificate.jpg', label: 'Meta Llama certificate', ratio: 1.4, rot: 2 },
    ],
  },
  cortexai: {
    folder: { title: 'CortexAI', sub: 'Medical AI' },
    script: 'Medical AI',
    head: 'Cortex AI',
    hook: 'AI that predicts kidney transplant rejection from genetic and clinical data.',
    facts: [
      ['My role', 'CPO & AI Engineer'],
      ['Recognition', 'Top 4 · Enactus World Cup 2025'],
      ['Also', 'NVIDIA Accelerator · GSEA finalist'],
    ],
    body: 'CortexAI is a decision-support system for transplant doctors. I built the ML platform that predicts rejection from genetic profiling and clinical biomarkers, and added RAG pipelines that cut clinical decision time from 12 hours to 10 seconds.',
    links: [{ label: 'cortex-os.org', href: 'https://cortex-os.org/' }],
    pics: [
      { file: 'cortexos-site.jpg', label: 'CortexOS site', ratio: 1.85, rot: 3 },
      { file: 'enactus-bangkok.jpg', label: 'Enactus World Cup 2025', ratio: 1.58, rot: -3 },
      { file: 'cortex-instagram.jpg', label: 'Instagram', ratio: 0.46, rot: -4 },
    ],
  },
  qazaqart: {
    folder: { title: 'QazaqArt.kz', sub: 'CTO · creative platform' },
    script: 'Creative platform',
    head: 'QazaqArt.kz',
    hook: 'I lead the tech behind a platform that helps Kazakh artists build sustainable businesses.',
    facts: [
      ['My role', 'CTO & IT Lead · Oct 2025 – now'],
      ['Stack', 'Django · Vue.js'],
      ['Growth', '+600 followers, 300+ users in a month'],
    ],
    body: 'I lead full-stack development: creator portfolios and an artwork gallery. I forged distribution deals with 4+ national residencies and media partners, and co-led partnerships with the British Council and the UN that took the work of 3 Kazakh artists to global festivals, including the UN SDG Creative Festival in Belgium.',
    links: [
      { label: 'qazaqart.kz', href: 'https://qazaqart.kz' },
      { label: 'Instagram', href: 'https://www.instagram.com/qazaqart.kz' },
    ],
    pics: [
      { file: 'qazaqart-mockup.jpg', label: 'QazaqArt app', ratio: 1.64, rot: 3 },
      { file: 'qazaqart-instagram.jpg', label: 'Instagram', ratio: 0.46, rot: -4 },
      { file: 'it-queen.jpg', label: 'IT Queen KZ final', ratio: 4 / 3, rot: -3 },
    ],
  },
  shainote: {
    folder: { title: 'ShaiNote', sub: 'Kazakh meeting AI' },
    script: 'Internship',
    head: 'ShaiNote',
    hook: 'An AI assistant that transcribes and summarises meetings in Kazakh.',
    facts: [
      ['My role', 'Software Engineering Intern'],
      ['Built on', 'SHAI Voice AI API'],
      ['Selected', '1 of 11 from 350+'],
    ],
    body: 'I develop the mobile apps for iOS and Android, and I design the desktop app, the Chrome extension and the website sign-in flow.',
    chips: ['iOS', 'Android', 'Desktop', 'Chrome extension'],
    links: [
      {
        label: 'Figma prototype',
        href: 'https://www.figma.com/design/QZPDL32aCDnEWK87OogH1X/ShaiNote-prototype-Main?node-id=0-1&p=f',
      },
    ],
    pics: [
      { file: 'shainote-desktop.jpg', label: 'Desktop app', ratio: 1.61, rot: 3 },
      { file: 'shainote-mobile.jpg', label: 'Mobile app', ratio: 2.04, rot: -3 },
    ],
  },
  enactus: {
    folder: { title: 'Enactus AITU', sub: 'Vice Captain & AI Lead' },
    script: 'Leadership',
    head: 'Enactus AITU',
    hook: 'A student social-entrepreneurship team that I help lead as Vice Captain and AI Lead.',
    facts: [
      ['My role', 'Vice Captain & AI Lead'],
      ['Since', 'Sept 2024 – now'],
      ['Results', 'National Champions ×2 · Top 4 World Cup'],
    ],
    body: 'I direct team strategy and operations and scale product development across 3+ social ventures, from idea to competition-ready execution. We became National Champions twice and Top 4 Global Finalists at the Enactus World Cup in Thailand, a first for Kazakhstan in 30 years.',
    pics: [
      { file: 'enactus-bangkok.jpg', label: 'Enactus World Cup 2025', ratio: 1.58, rot: 3 },
      { file: 'enactus-trophies.jpg', label: 'Enactus team', ratio: 1.33, rot: -3 },
    ],
  },
  k7: {
    script: 'Latest build',
    head: 'K7',
    hook: 'A quest app for meeting people through shared interests.',
    facts: [
      ['Event', 'Business Cup 2.0 · 24h'],
      ['Where', 'Nazarbayev University'],
      ['When', 'Nov 14–15, 2026'],
    ],
    body: 'Pick three interests at Hard, Medium and Easy, follow a roadmap of levels, earn coins with photo reports and find people with the same interests on a map. Finished quests earn bronze, silver and gold ninja badges you can share to LinkedIn or Instagram.',
    tag: "Your goal is a quest. Don't play it alone.",
    pics: [
      { file: 'k7-screens.jpg', label: 'K7 screens', ratio: 2.2, rot: 3 },
      { file: 'k7-map.jpg', label: 'K7 map', ratio: 1.84, rot: -3 },
      { file: 'k7-feed.jpg', label: 'K7 feed', ratio: 1.86, rot: 2 },
    ],
  },
}

export const moreBuilds = [
  {
    title: 'HackAlem AI',
    meta: 'Astana · Sept 2026 · Energy track',
    body: 'An agentic AI system that forecasts how much power a wind farm will produce.',
  },
  {
    title: 'ForteBank Datathon 26',
    meta: 'Hackathon · Frontend + UX/UI',
    body: 'An AI service that flags cash-discipline violations in cashier video. I built the interface and the landing page.',
  },
  {
    title: 'MEAR paper',
    meta: 'IEEE conference · Oct 2026',
    body: 'Research on routing for LEO satellite networks using manifold learning, written with Prof. Gulnur Shuteyeva.',
  },
  {
    title: "Birka's Journey",
    meta: 'Instagram Reels',
    body: 'A day-in-my-life series in English and Kazakh about combining many interests through time management.',
  },
]
