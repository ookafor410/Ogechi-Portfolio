import deliveryCyclist from '../assets/gig_economy_article/delivery-cyclist.png'
import gigEconomyRaw from '../assets/gig_economy_article/gig-economy.md?raw'
import faithFloodingRaw from '../assets/faith_flooding_article/faith-leaders-flooding.md?raw'
import faithCockfieldForum from '../assets/faith_flooding_article/faith_cockfield_forum.png'
import faithFloodMap2080 from '../assets/faith_flooding_article/faith_flood_map_2080.png'
import faithClimateEquityRoundtable from '../assets/faith_flooding_article/faith_climate_equity_roundtable.png'
import faithReadyToolkit from '../assets/faith_flooding_article/faith_ready_toolkit.png'
import pipelineTechRaw from '../assets/pipeline_tech_article/pipeline-tech.md?raw'
import girlsWhoCodeCollegeLoop from '../assets/pipeline_tech_article/girls_who_code_college_loop.png'
import ruralAmericaRaw from '../assets/rural_america_article/rural-america.md?raw'
import ruralAmericaPhoto from '../assets/rural_america_article/rural-america.jpg'
import nameMeaningRaw from '../assets/name_meaning_article/name-meaning.md?raw'
import childhoodPhoto from '../assets/name_meaning_article/childhood.jpg'

const WRITING_TAG = 'Writing'

const headline = 'The New Face of Work: Immigrants Fueling the Gig-Economy'
const standfirst =
  "A young Dominican immigrant delivering for three apps at once puts a human face on New York's 65,000 gig-economy delivery workers — and the fight for their rights."

// Source file leads with the headline + byline as their own paragraphs;
// those are already carried as structured fields above, so drop them here
// and strip the dateline lead-in since it's rendered separately in the meta line.
const bodyMarkdown = gigEconomyRaw
  .split(/\r?\n\s*\r?\n/)
  .map((paragraph) => paragraph.trim())
  .filter(Boolean)
  .slice(2)
  .join('\n\n')
  .replace(/^NEW YORK — /, '')

const faithHeadline = 'New York City Is Going to Flood. Faith Leaders Are Ready to Act as First Responders.'
const faithStandfirst =
  'As climate disasters become routine across New York City, faith leaders in the five boroughs are stepping into an unofficial role as first responders — filling the gap between what government promises and what it delivers.'

// Source file leads with the headline + byline as their own paragraphs, and has
// two section subheads inline; all three are structured fields elsewhere (see
// `sections` below), so they're stripped out of the plain prose body here.
const FAITH_SECTION_HEADINGS = ['Neighborhoods Under Water', 'Building A Network']

const faithBlocks = faithFloodingRaw
  .split(/\r?\n\s*\r?\n/)
  .map((paragraph) => paragraph.trim())
  .filter(Boolean)
  .slice(2)

function faithSectionAfterParagraph(heading) {
  const headingIndex = faithBlocks.indexOf(heading)
  return faithBlocks.slice(0, headingIndex).filter((block) => !FAITH_SECTION_HEADINGS.includes(block)).length - 1
}

const faithBodyMarkdown = faithBlocks.filter((block) => !FAITH_SECTION_HEADINGS.includes(block)).join('\n\n')

const pipelineHeadline = 'Is the Pipeline Really Still Empty? Or is Big Tech Looking in The Wrong Place'
const pipelineStandfirst =
  'Despite years of funded diversity initiatives, Big Tech still hires from a prestige-ranked pipeline that leaves graduates from HBCUs, women’s colleges, and bootcamps locked out — raising the question of whether the pipeline is empty or the door is closed.'

// Source file leads with the headline + byline as their own paragraphs; those
// are already carried as structured fields above, so drop them here.
const pipelineBodyMarkdown = pipelineTechRaw
  .split(/\r?\n\s*\r?\n/)
  .map((paragraph) => paragraph.trim())
  .filter(Boolean)
  .slice(2)
  .join('\n\n')

const ruralHeadline =
  'Do Not Forget About Rural America: Reversing the Decline of Rural Communities through Smart Technology'
const ruralStandfirst =
  'As young people leave and broadband passes them by, rural America risks becoming a landscape of ghost towns — but extending the smart-city model into interconnected "smart regions" could reverse the decline.'

// Source file leads with a two-line title + byline (3 blocks), then body
// paragraphs, then a "References" heading followed by the citation list —
// both handled as structured fields elsewhere, so only the paragraphs between
// them make up the plain prose body.
const ruralBlocks = ruralAmericaRaw
  .split(/\r?\n\s*\r?\n/)
  .map((paragraph) => paragraph.trim())
  .filter(Boolean)

const ruralBodyMarkdown = ruralBlocks.slice(3, ruralBlocks.indexOf('References')).join('\n\n')

const nameMeaningHeadline = 'My Name Is Not an Inconvenience'
const nameMeaningStandfirst =
  "A reflection on a name mispronounced for years, the losses my parents carried before I was born, and the Igbo meaning that ties me to a history I hold but never lived — Ogechi: God's Time is Best."

// Source file leads with just the headline (no separate byline line), then body
// paragraphs, then a "Work Cited" heading followed by the citation list — both
// handled as structured fields elsewhere, so only the paragraphs between them
// make up the plain prose body.
const nameMeaningBlocks = nameMeaningRaw
  .split(/\r?\n\s*\r?\n/)
  .map((paragraph) => paragraph.trim())
  .filter(Boolean)

const nameMeaningBodyMarkdown = nameMeaningBlocks.slice(1, nameMeaningBlocks.indexOf('Work Cited')).join('\n\n')

export const ARTICLES = [
  {
    id: 'gig-economy-immigrants',
    href: '/work/gig-economy-immigrants',
    image: deliveryCyclist,
    alt: 'A food-delivery cyclist rides through a dark Manhattan street at night, captured in motion blur with a passing taxi and a magenta bike light.',
    tags: ['2025',WRITING_TAG],
    title: headline,
    description: standfirst,

    headline,
    byline: 'By Ogechi Okafor',
    dateline: 'NEW YORK',
    standfirst,
    figures: [
      {
        src: deliveryCyclist,
        alt: 'A food-delivery cyclist rides through a dark Manhattan street at night, captured in motion blur with a passing taxi and a magenta bike light.',
        caption: '',
        credit: '',
        afterParagraph: 4,
      },
    ],
    bodyMarkdown,
    pullQuotes: [
      {
        text: "I'm just a young guy out here trying to make it.",
        attribution: 'Joel Camillo',
        afterParagraph: 2,
      },
      {
        text: 'In many ways, gig work is not new.',
        attribution: 'Lindsey Cameron, The Wharton School',
        afterParagraph: 6,
      },
    ],
  },
  {
    id: 'faith-leaders-flooding',
    href: '/work/faith-leaders-flooding',
    image: faithCockfieldForum,
    alt: 'Pastor David Cockfield speaking with a NYDIS representative in a conference room at the climate forum.',
    tags: ['2025', WRITING_TAG],
    title: faithHeadline,
    description: faithStandfirst,

    headline: faithHeadline,
    byline: 'By Ogechi Okafor',
    dateline: 'NEW YORK',
    standfirst: faithStandfirst,
    bodyMarkdown: faithBodyMarkdown,
    figures: [
      {
        src: faithCockfieldForum,
        alt: 'Pastor David Cockfield speaking with a NYDIS representative in a conference room at the climate forum.',
        caption: 'Pastor Cockfield talking with NYDIS at the Building Hope & Safety in a Changing Climate forum.',
        credit: 'NYDIS',
        afterParagraph: 4, // "...before the Red Cross does."
      },
      {
        src: faithFloodMap2080,
        alt: 'A map of New York City shading large coastal areas of Brooklyn, Queens, the Bronx, Staten Island and the Rockaways as at risk of nuisance flooding, deep flooding, and future high tides by 2080.',
        caption: 'Projected flooding in New York City under 2080 sea-level rise.',
        credit: 'NYC Open Data',
        afterParagraph: 8, // Lucy Cummings section, before her "disaster after the disaster" quote
      },
      {
        src: faithClimateEquityRoundtable,
        alt: 'Left: a faith leader pointing at a flood map. Right: community members working together at a table during the Climate Equity Roundtable.',
        caption: "Images courtesy of NYDIS's Climate Equity Roundtable.",
        credit: 'NYDIS',
        afterParagraph: 49, // immediately before "Just after the 13th anniversary of Sandy..."
      },
      {
        src: faithReadyToolkit,
        alt: "A promotional graphic for the Faith Ready: Climate Adaptation Toolkit over a city skyline at sunset, with the tagline 'Gather together. Plan together. Prepare together. Thrive together.'",
        caption: 'The released Faith Ready: Climate Adaptation Toolkit.',
        credit: 'NYC Faith Sector Climate Adaptation Working Group',
        afterParagraph: 63, // "Their toolkit is a compilation..." section
      },
    ],
    pullQuotes: [
      {
        text: "When disaster hits, we're the first ones people in the community call and we don't say no.",
        attribution: 'Pastor David Cockfield',
        afterParagraph: 3,
      },
      {
        text: 'It can become the disaster after the disaster.',
        attribution: 'Lucy Cummings, NYDIS',
        afterParagraph: 9,
      },
      {
        text: 'People are experts of their own community.',
        attribution: 'Mychal Johnson, South Bronx Unite',
        afterParagraph: 59,
      },
    ],
    sections: [
      { heading: 'Neighborhoods Under Water', afterParagraph: faithSectionAfterParagraph('Neighborhoods Under Water') },
      { heading: 'Building A Network', afterParagraph: faithSectionAfterParagraph('Building A Network') },
    ],
    table: {
      caption: 'Table 1: Flood Risk Analysis of 1–3 Family Dwelling Sales in 2023',
      credit: 'First Street Foundation',
      afterParagraph: 16, // "...one out of every five such homes sold in New York City."
      columns: [
        'Borough',
        'Number of Sales in 2023',
        'Value of Sales',
        '% of Sales in Flood Risk Zone',
        'Average Sales Price',
      ],
      rows: [
        ['Bronx', '499', '$202,072,119', '15.53%', '$404,954'],
        ['Brooklyn', '2,591', '$1,377,479,353', '25.53%', '$531,640'],
        ['Manhattan', '31', '$195,860,001', '11.36%', '$6,318,065'],
        ['Queens', '2,566', '$1,142,185,859', '19.21%', '$445,123'],
        ['Staten Island', '1,657', '$703,484,894', '31.00%', '$424,553'],
      ],
      totalRow: ['Total', '7,344', '$3,621,082,226', '22.71%', '$493,067'],
    },
  },
  {
    id: 'tech-pipeline-diversity',
    href: '/work/tech-pipeline-diversity',
    image: girlsWhoCodeCollegeLoop,
    alt: 'About ten young women of varied backgrounds gathered around a table with laptops in a bright modern office, some seated and some standing, smiling toward the camera, with blue geometric accents in the corners.',
    tags: ['2024', WRITING_TAG],
    title: pipelineHeadline,
    description: pipelineStandfirst,

    headline: pipelineHeadline,
    byline: 'By Ogechi Okafor',
    standfirst: pipelineStandfirst,
    bodyMarkdown: pipelineBodyMarkdown,
    figures: [
      {
        src: girlsWhoCodeCollegeLoop,
        alt: 'About ten young women of varied backgrounds gathered around a table with laptops in a bright modern office, some seated and some standing, smiling toward the camera, with blue geometric accents in the corners.',
        caption: 'Students participating in the College Loop program shown with CEO Dr. Tarika Barrett.',
        credit: 'Girls Who Code',
        afterParagraph: 5, // "...author of Pedigree: How Elite Students Get Elite Jobs."
      },
    ],
    pullQuotes: [
      {
        text: "The 'pipeline' argument is loosely smoke and mirrors.",
        attribution: 'Don Tomaskovic-Devey, UMass Amherst',
        afterParagraph: 3,
      },
      {
        text: 'How can we take that spark and turn it into a big ball of fire?',
        attribution: 'Poonam Mantha, Girls Who Code',
        afterParagraph: 18,
      },
      {
        text: 'Somebody has to break the standard.',
        attribution: 'Poonam Mantha, Girls Who Code',
        afterParagraph: 27,
      },
    ],
  },
  {
    id: 'rural-america-smart-technology',
    href: '/work/rural-america-smart-technology',
    image: ruralAmericaPhoto,
    alt: 'A two-lane country road runs through rolling farmland at golden hour, flanked by green and freshly harvested fields, dry grass, scattered trees, and a line of utility poles under a wide pale-blue sky.',
    tags: ['2024', WRITING_TAG],
    title: ruralHeadline,
    description: ruralStandfirst,

    headline: ruralHeadline,
    byline: 'By Ogechi Okafor',
    standfirst: ruralStandfirst,
    bodyMarkdown: ruralBodyMarkdown,
    figures: [
      {
        src: ruralAmericaPhoto,
        alt: 'A two-lane country road runs through rolling farmland at golden hour, flanked by green and freshly harvested fields, dry grass, scattered trees, and a line of utility poles under a wide pale-blue sky.',
        caption: '',
        credit: 'Photo by Ogechi Okafor',
        afterParagraph: -1, // hero, before the first paragraph
      },
    ],
    pullQuotes: [
      {
        text: 'The cycle simply repeats until entire towns around the country become modern ghost towns.',
        afterParagraph: 4,
      },
      {
        text: 'Far from being a lost cause, rural communities still have a tremendous amount to offer America.',
        afterParagraph: 8,
      },
    ],
    references: [
      {
        text: 'Tonar, Remington. (2021). Recorded personal interview with Mr. Tonar. July 28, 2021. Zoom Online Conferencing Platform.',
      },
      {
        text: 'Fugett, K. (2020). I live in rural America, cut off from the internet. The pandemic has made me more isolated than ever. Vox.',
        url: 'https://www.vox.com/first-person/2020/4/9/21214105/coronavirus-internet-rural-america',
      },
      {
        text: 'Greenblatt, A. (2020). This small town shows how rural communities can bridge the digital divide. GovTech.',
        url: 'https://www.govtech.com/magazines/gt-special-issue-nov-2020-this-small-town-shows-how-rural-communities-can-bridge-the-digital-divide.html',
      },
      {
        text: 'Neal, C., Miller, J., Bansal, M. P., Fishman, T., & Chew, B. (2019). The promise of smart rural communities. Deloitte Insights.',
        url: 'https://www2.deloitte.com/us/en/insights/industry/public-sector/the-promise-of-smart-rural-communities.html',
      },
      {
        text: 'Richard. (2019). From smart cities to rural communities. Two Worlds: Intelligent Reality.',
        url: 'https://two-worlds.com/smart-cities-to-rural-communities/',
      },
      {
        text: 'Tonar, R., & Talton, E. (2018). We need to stop talking about smart cities and start building smart regions. Forbes.',
        url: 'https://www.forbes.com/sites/ellistalton/2018/10/19/we-need-to-stop-talking-about-smart-cities-and-start-building-smart-regions/?sh=6f97093668cc',
      },
      {
        text: 'The United States Government. (2021). FACT sheet: President Biden announces support for the Bipartisan infrastructure framework. The White House.',
        url: 'https://www.whitehouse.gov/briefing-room/statements-releases/2021/06/24/fact-sheet-president-biden-announces-support-for-the-bipartisan-infrastructure-framework/',
      },
    ],
  },
  {
    id: 'my-name-is-not-an-inconvenience',
    href: '/work/my-name-is-not-an-inconvenience',
    image: childhoodPhoto,
    alt: 'People cooling off in the spray of an open fire hydrant on a sunny brownstone-lined street on a summer day.',
    tags: ['2025', WRITING_TAG],
    title: nameMeaningHeadline,
    description: nameMeaningStandfirst,

    headline: nameMeaningHeadline,
    byline: 'By Ogechi Okafor',
    standfirst: nameMeaningStandfirst,
    bodyMarkdown: nameMeaningBodyMarkdown,
    figures: [
      {
        // PLACEHOLDER — swap src/alt/credit here when the final photo is ready.
        src: childhoodPhoto,
        alt: 'People cooling off in the spray of an open fire hydrant on a sunny brownstone-lined street on a summer day.',
        caption: '',
        credit: '[credit TBD]',
        afterParagraph: -1, // hero, before the first paragraph
      },
    ],
    pullQuotes: [
      {
        text: 'One in four women will gain membership to this secret club that no one wants to join.',
        afterParagraph: 1,
      },
      {
        text: 'In West African culture, words have power, and names connect you to your identity.',
        afterParagraph: 4,
      },
      {
        text: "Ogechi in Igbo means God's Time is Best.",
        afterParagraph: 5,
      },
    ],
    referencesLabel: 'Work Cited',
    references: [
      {
        text: "Fair, Frankie et al. “Migrant women's experiences of pregnancy, childbirth and maternity care in European countries: A systematic review.” PloS one vol. 15,2 e0228378. 11 Feb. 2020.",
      },
      {
        text: 'Bhasin, A. (2021, May). A Systemic Failure: Immigrant Moms and Babies Are Being Denied Health Care. Retrieved July 18, 2022.',
        url: 'https://www.nationalpartnership.org/our-work/health/moms-and-babies/immigrant-moms-and-babies-denied.html',
      },
      {
        text: "Gurtin, Z. (2020, November 26). Miscarriage is still taboo – which is why Meghan's words are so powerful. The Guardian. Retrieved July 18, 2022.",
        url: 'https://www.theguardian.com/commentisfree/2020/nov/26/miscarriage-taboo-meghan-reaction',
      },
    ],
  },
]
