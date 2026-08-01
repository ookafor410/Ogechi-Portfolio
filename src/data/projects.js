import stylelogxpCatalog from '../assets/stylelogxp_project/catalog.gif'
import stylelogxpEndLog from '../assets/stylelogxp_project/end-logoff.gif'
import stylelogxpStartMenu from '../assets/stylelogxp_project/start_menu_open.png'
import stylelogxpOutfitLog from '../assets/stylelogxp_project/catalog_screen.png'
import stylelogxpAIStylist from '../assets/stylelogxp_project/stylist_screen.png'
import stylelogxpAddOutfit from '../assets/stylelogxp_project/add_outfit.png'
import stylelogxpLogOff from '../assets/stylelogxp_project/end-logoff.gif'
import stylelogxpFigmaDesign from '../assets/stylelogxp_project/figma_design.png'
import magnesynthMain from '../assets/magnesynth-project/magnesynth_main.jpg'
import magnesynthUpdateImage from '../assets/magnesynth-project/magnesynth_update_image.jpg'
import magnesynthPluckCloseup from '../assets/magnesynth-project/magnesynth_pluck_closeup.jpg'
import magnesynthPartCloseView from '../assets/magnesynth-project/protoype_part_close_view.jpg'
import magnesynthWorkInLab from '../assets/magnesynth-project/protoype_work_in_lab.jpg'
import undeadMain from '../assets/undead_project/img10.jpg'
import img3 from '../assets/undead_project/img3.jpg'
import img4 from '../assets/undead_project/img4.jpg'
import img5 from '../assets/undead_project/img5.jpg'
import img6 from '../assets/undead_project/img6.jpg'
import img7 from '../assets/undead_project/img7.jpg'
import img9 from '../assets/undead_project/img9.jpg'
import img11 from '../assets/undead_project/img11.jpg'
import img13 from '../assets/undead_project/img13.jpg'
import img14 from '../assets/undead_project/img14.jpg'
import img15 from '../assets/undead_project/img15.jpg'
import img17 from '../assets/undead_project/img17.jpg'
import img19 from '../assets/undead_project/img19.jpg'
import img24 from '../assets/undead_project/img24.jpg'
import img25 from '../assets/undead_project/img25.jpg'
import jhappi from '../assets/images/project-jhappi.jpg'
import vaxa from '../assets/images/project-vaxa.jpg'
import biome from '../assets/images/project-biome.jpg'
import isro from '../assets/images/project-isro.jpg'
import deciced from '../assets/images/project-deciced.jpg'
import mycotint from '../assets/images/project-mycotint.jpg'
import cuSoonClub from '../assets/images/project-cu-soon-club.jpg'
import teachingElectronics from '../assets/images/project-teaching-electronics.jpg'
import evergreeningVaccines from '../assets/images/project-evergreening-vaccines.jpg'
import indigenousPractices from '../assets/images/project-indigenous-practices.jpg'
import inclusiveSanitaryPad from '../assets/images/project-inclusive-sanitary-pad.jpg'
import workshopSkills from '../assets/images/project-workshop-skills.jpg'

// Full project archive — the single source of truth for project content.
// SelectedWork picks a curated subset of these for the home page "Quick Glance";
// ProjectsPage renders all of them for the "Work" archive.
export const PROJECTS = [
  {
    id: 'magnesynth',
    image: magnesynthMain,
    alt: 'The Magnesynth instrument on a table under pink and purple studio lighting; an aluminium-extrusion string frame with 3D-printed pickup and keypad modules, a circuit board in a white printed enclosure, an effects pedal, and studio monitor speakers.',
    tags: ['2025', 'Physical Computing'],
    title: 'Magnesynth',
    description: 'Modular string synthesizer blending motors, magnets, and sound',
    href: '/work/magnesynth',
    overview:
      "Magnesynth is an experimental modular string synthesizer that combines physical strings, electronic sound synthesis, mechanical movement, and electromagnetic phenomena. The instrument transforms the interaction between vibrating strings, pickups, motors, magnets, and modular audio components into an open-ended platform for musical performance and experimentation. Its modular construction includes interchangeable bridges, string mounts, pickup controls, automated plucking mechanisms, lighting, and Eurorack-compatible components.",
    timeline: 'February–May 2025',
    type: 'Physical Computing · Interactive Media · Experimental Instrument Design',
    role: "As an Undergraduate Research Assistant at MangLab, I supported the iterative development of Magnesynth through hands-on prototyping, fabrication, assembly, and technical testing. I helped experiment with physical and electronic components, refine the instrument's modular construction, and test how motors, strings, pickups, and electromagnetic interactions could produce different forms of movement and sound. I also contributed to documenting the system and preparing the prototype for continued research, demonstration, and performance.",
    tools: [
      'Python',
      'Fusion 360',
      '3D Printing',
      'Servo Motors',
      'Electromagnets',
      'Audio Pickups',
      'Modular Synthesis',
      'Physical Prototyping',
    ],
    heroImage: {
      src: magnesynthMain,
      alt: 'The Magnesynth instrument on a table under pink and purple studio lighting; an aluminium-extrusion string frame with 3D-printed pickup and keypad modules, a circuit board in a white printed enclosure, an effects pedal, and studio monitor speakers.',
      aspectRatio: '2400 / 1351',
    },
    images: [
      {
        src: magnesynthUpdateImage,
        alt: 'Hands playing the Magnesynth outdoors on a round wooden table, with purple 3D-printed string bridges, an audio pickup, a servo plucking mechanism, a bass effects pedal, and frangipani flowers resting on the frame.',
        aspectRatio: '2400 / 1800',
      },
      {
        src: magnesynthPluckCloseup,
        alt: 'Two people at an outdoor workshop plucking and adjusting the strings of the Magnesynth prototype.',
        aspectRatio: '2400 / 1534',
      },
      {
        src: magnesynthPartCloseView,
        alt: 'Close-up of the Magnesynth control module: four translucent 3D-printed keycaps on mechanical switches, an Adafruit NeoSlider, and an ESP32-S3 Reverse TFT Feather showing CircuitPython output.',
        aspectRatio: '2400 / 1800',
      },
      {
        src: magnesynthWorkInLab,
        alt: 'The Magnesynth keypad and microcontroller prototype resting on a laptop playing a code-loading tutorial, in the MangLab interactive-media lab.',
        aspectRatio: '2400 / 1800',
      },
      {
        src: stylelogxpLogOff,
        alt: 'A Windows XP-style desktop showing the StyleLogXP log off screen with a list of app options and a search bar',
        aspectRatio: '800 / 448',
      }
    ],
  },
  {
    id: 'stylelogxp',
    image: stylelogxpCatalog,
    alt: 'A Windows XP-style desktop showing the StyleLogXP outfit catalog window with a grid of logged outfit thumbnails',
    tags: ['2026', 'Web Application'],
    title: 'StylelogXP',
    description: 'A personal outfit diary and AI stylist, disguised as a Windows XP desktop.',
    href: '/work/stylelogxp',
    overview:
      "StylelogXP is a web application that allows users to log their daily outfits and receive AI-generated style recommendations. The app is designed with a nostalgic Windows XP aesthetic, providing a unique and engaging user experience. Users can upload photos of their outfits, track their fashion choices over time, and explore personalized styling tips based on their wardrobe.",
    timeline: 'January–March 2026',
    type: 'Web Application · User Experience Design · AI Integration',
    role: "Solo owned end to end: concept, UX/UI design, and front‑end development. I designed the full interface in Figma and directed the code build with AI tooling (Claude Code + the Figma MCP), handling the app architecture, the Gemini AI integration, local data storage, and the retro Windows XP visual system.",
    tools: [
      'Figma',
      'Adobe Photoshop',
      'React',
      'TypeScript',
      'Vite',
      'Claude Code',
      'Google Gemini API',
      'IndexedDB',
    ],
    heroImage: {
      src: stylelogxpCatalog,
      alt: 'A Windows XP-style desktop showing the StyleLogXP outfit catalog window with a grid of logged outfit thumbnails',
      aspectRatio: '800 / 448',
    },
    images: [
      {
        src: stylelogxpStartMenu,
        alt: 'A Windows XP-style desktop showing the StyleLogXP start menu with a list of app options and a search bar',
        aspectRatio: '2810 / 1576',
      },
      {
        src: stylelogxpOutfitLog,
        alt: 'A Windows XP-style desktop showing the StyleLogXP outfit log window with a list of logged outfits and their details',
        aspectRatio: '1626 / 1178',
      },
      {
        src: stylelogxpAIStylist,
        alt: 'A Windows XP-style desktop showing the StyleLogXP AI stylist window with a list of recommended outfits and styling tips',
        aspectRatio: '1230 / 1088',
      }, 
      {
        src: stylelogxpAddOutfit,
        alt: 'A Windows XP-style desktop showing the StyleLogXP add outfit window with a form to upload outfit photos and enter details',
        aspectRatio: '1100 / 1262',
      },
      {
        src: stylelogxpFigmaDesign,
        alt: 'A Figma design file showing the StyleLogXP interface with various windows and components',
        aspectRatio: '2816 / 1578',
      },
      {
        src: stylelogxpEndLog,
        alt: 'A Windows XP-style desktop showing the StyleLogXP log off screen with a list of app options and a search bar',
        aspectRatio: '800 / 448',
      }
    ],
  },
  {
    id: 'undead',
    image: undeadMain,
    alt: 'Three zombie-styled skaters stand on boards beneath an underpass.',
    tags: ['2025', 'Campaign Photography'],
    title: 'Undead Uniform',
    description: 'Zombie horror spec campaign collides with the raw energy of New York City skate culture',
    href: '/work/undead',
    overview:
      "What if skate culture never dies? This spec campaign for Zumiez, produced under Everlinity Productions, reimagines New York City skate culture through a surreal, dystopian lens.Skaters move like zombies, caught between motion and decay. Set against the raw textures of graffiti-covered underpasses and late-night city streets, the series blends skateboarding culture with horror.  The project leans into contrast with flash lighting against deep shadows and movement frozen into something almost staged. The boards, clothing, and attitude remain true to skate culture, but the styling distorts it begins to feel unfamiliar.",
    timeline: 'March–June 2024',
    type: 'Photography · Commercial Campaign · Creative Direction · Fashion Styling',
    role: "As Creative Strategist, Stylist, and Photographer, I led a 10+ person team through a 14-hour production to bring this concept to life, capturing not just final campaign images but hundreds of behind-the-scenes assets designed for multi-platform storytelling. ",
    tools: [
      'Adobe Photoshop',
      'Adobe Lightroom',
      'Adobe Premiere Pro',
      'Canon EOS R5 · Canon RF 24-70mm f/2.8L IS USM Lens',
      'Canon RF 70-200mm f/2.8L IS USM Lens',
      'LED Lighting',
      'Studio Flash Lighting',
    ],
    heroImage: {
      src: undeadMain,
      alt: 'Three zombie-styled skaters stand on boards beneath an underpass',
      aspectRatio: '2048 / 1365',
    },
    images: [
      {
        src: img3,
        alt: 'Three zombie-styled skaters pose beneath a graffiti-covered underpass',
        aspectRatio: '1365 / 2048',
      },
      {
        src: img4,
        alt: 'A zombie-styled skater balances on a skateboard at night',
        aspectRatio: '1365 / 2048',
      },
      {
        src: img5,
        alt: 'A skater holds a board beside a graffiti-covered wall',
        aspectRatio: '2048 / 1365',
      },
      {
        src: img6,
        alt: 'A zombie-styled skater stands over a skateboard on a dark sidewalk',
        aspectRatio: '2048 / 1365',
      },
      {
        src: img7,
        alt: 'Three skaters enter a dark skate spot through a chain-link gate',
        aspectRatio: '2048 / 1365',
      },
      {
        src: img9,
        alt: 'Three skaters pose while production equipment remains visible',
        aspectRatio: '2048 / 1365',
      },
      {
        src: img11,
        alt: 'Three skaters pose with boards in front of layered graffiti',
        aspectRatio: '1365 / 2048',
      },
      {
        src: img13,
        alt: 'Three skaters stand beneath a towering graffiti-covered structure',
        aspectRatio: '2048 / 1365',
      },
      {
        src: img14,
        alt: 'A skater rides through a graffiti-marked concrete space at night',
        aspectRatio: '2048 / 1365',
      },
      {
        src: img15,
        alt: 'A zombie-styled skater rides past a graffiti-covered pillar',
        aspectRatio: '1365 / 2048',
      },
      {
        src: img17,
        alt: 'A camera operator and crew prepare a nighttime shot',
        aspectRatio: '1365 / 2048',
      },
      {
        src: img19,
        alt: 'Crew members gather around camera equipment beneath an underpass',
        aspectRatio: '2048 / 1365',
      },
      {
        src: img24,
        alt: 'Two crew members inspect a cinema camera in the street',
        aspectRatio: '1365 / 2048',
      },
      {
        src: img25,
        alt: 'A film crew adjusts a camera rig beside an open vehicle',
        aspectRatio: '2048 / 1365',
      },
    ]
  },
  {
    id: 'biome',
    image: biome,
    alt: 'A petri dish with branching yellow slime mold growth photographed on a black background',
    tags: ['2025', 'Materials Design'],
    title: 'BIOME: Futures of Biodesign & Biofabrication',
    description: 'Inquiry into the possibility of developing Living Materials',
  },
  {
    id: 'isro',
    image: isro,
    alt: 'A tablet displaying a redesigned ISRO website homepage with a rocket launch photo',
    tags: ['2024', 'Product Design'],
    title: 'ISRO website redesign',
    description: '24hr UI/UX Challenge',
  },
  {
    id: 'deciced',
    image: deciced,
    alt: 'Overhead view of a hexagonal board game in progress with players placing tiles',
    tags: ['2024', 'Systems Design'],
    title: 'DecidEd',
    description: 'Systems project diving in the complexity of decision making',
  },
  {
    id: 'mycotint',
    image: mycotint,
    alt: 'A research poster for MycoTint, a stress-responsive mycelium material, with diagrams and product visualization sketches',
    tags: ['2026', 'Materials Design'],
    title: 'MycoTint',
    description: 'Stress-sensing mycelium',
  },
  {
    id: 'cu-soon-club',
    image: cuSoonClub,
    alt: 'A vintage fax machine printing out a message on perforated paper',
    tags: ['2024', 'Mixed Bag!'],
    title: 'C U Soon Club',
    description: 'Phygital messaging format',
  },
  {
    id: 'teaching-electronics',
    image: teachingElectronics,
    alt: 'Kids gathered around a table assembling a simple circuit with an instructor',
    tags: ['2024', 'Product Design'],
    title: 'Teaching simple electronics to kids',
    description: '',
  },
  {
    id: 'evergreening-vaccines',
    image: evergreeningVaccines,
    alt: 'A zine titled "Evergreening of Vaccines" resting on a Design for Health journal',
    tags: ['2024', 'Systems Design'],
    title: 'Systems Thinking: Evergreening of Vaccines',
    description: 'Infographic Systems Thinking Zine',
  },
  {
    id: 'indigenous-practices',
    image: indigenousPractices,
    alt: 'An aerial view of a terraced hillside with a stone structure, captioned "Indigenous Practices"',
    tags: ['2023', 'Product Design'],
    title: 'Indigenous Practices: Field Research',
    description: 'Field research of vernacular architecture',
  },
  {
    id: 'inclusive-sanitary-pad',
    image: inclusiveSanitaryPad,
    alt: '"One" sanitary napkin packaging beside a photo of hands holding the redesigned sticker applicator',
    tags: ['2022', 'Product Design'],
    title: 'One: Inclusive Sanitary Pad',
    description: 'Sanitary pad sticker redesign',
  },
  {
    id: 'workshop-skills',
    image: workshopSkills,
    alt: 'A hand-turned wooden cup, a welded metal ornament, and a scale-model brass cannon from a prototyping workshop',
    tags: ['Product Design'],
    title: 'Workshop Skills',
    description:
      'A compilation of small projects displaying prototyping skills like welding, stitching, lathe work, woodwork, casting etc.',
  },
]
