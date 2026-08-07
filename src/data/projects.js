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
import hungryOmNomWelcome from '../assets/hungry_nom_project/hungry-om-nom-welcome.png'
import hungryOmNomGameplay from '../assets/hungry_nom_project/hungry-om-nom-gameplay.png'
import hungryOmNomBladeTrail from '../assets/hungry_nom_project/hungry-om-nom-blade-trail.png'
import hungryOmNomLevel5 from '../assets/hungry_nom_project/hungry-om-nom-level5.png'
import hungryOmNomInstructions from '../assets/hungry_nom_project/hungry-om-nom-instructions.png'
import hungryOmNomFigmaDesign from '../assets/hungry_nom_project/figma-design.png'
import hungryOmNomWin from '../assets/hungry_nom_project/hungry-om-nom-win.png'
import hungryOmNomGameOver from '../assets/hungry_nom_project/hungry-om-nom-gameover.png'
import pinklady from '../assets/pink_lady_project/imgp4.jpeg'
import imgp1 from '../assets/pink_lady_project/imgp1.jpeg'
import imgp2 from '../assets/pink_lady_project/imgp2.jpeg'
import imgp3 from '../assets/pink_lady_project/imgp3.jpeg'
import imgp4 from '../assets/pink_lady_project/imgp4.jpeg'
import imgp5 from '../assets/pink_lady_project/imgp5.jpeg'
import imgp6 from '../assets/pink_lady_project/imgp6.jpeg'
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
    liveUrl: 'https://stylelogxp.vercel.app',
    liveLabel: 'Try StylelogXP live',
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
    timeline: 'October 2025',
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
    id: 'omnom',
    image: hungryOmNomWelcome,
    alt: "The Hungry Om Nom title screen on a cardboard-textured background, with Start and Instructions buttons, the tagline 'Slice the ropes, dodge the walls, and feed Om Nom!', and a prompt to allow webcam access.",
    tags: ['2026', 'Computer Vision'],
    title: 'Hungry Om Nom',
    description: 'A browser-based rope-cutting game controlled entirely by webcam hand-tracking — no mouse, keyboard, or touch.',
    href: '/work/omnom',
    overview:
      "Hungry Om Nom is a browser-based rope-cutting game controlled entirely through webcam hand-tracking — no mouse, keyboard, or touch input. Starting from an existing MediaPipe hand-tracking codebase built for a Fruit Ninja–style game, I re-architected it into a physics-based rope-cutting experience inspired by Cut the Rope: players swipe a finger in front of the camera to slice ropes, using real line-intersection detection and Verlet-integration physics to swing candy through multi-rope levels, collect stars for bonus points, and deliver it into the character's mouth. The project includes a full level system, scoring and lives, and a custom-illustrated UI — welcome screen, instructions, and win/lose states — designed in Figma and implemented with vanilla JavaScript and HTML5 canvas.",
    timeline: 'July–August 2026',
    type: 'Personal Project · Browser Game · Computer Vision',
    role: 'Solo Developer & Designer — game and physics engineering, hand-tracking integration, UI/UX design.',
    tools: ['JavaScript', 'HTML5 Canvas', 'MediaPipe Hands', 'Figma', 'HTML/CSS', 'Python'],
    liveUrl: 'https://hungry-om-nom.vercel.app/',
    liveLabel: 'Play Hungry Om Nom',
    attribution:
      "This game is an educational reimplementation inspired by ZeptoLab's Cut the Rope. Om Nom is a character owned by ZeptoLab.",
    heroImage: {
      src: hungryOmNomWelcome,
      alt: "The Hungry Om Nom title screen on a cardboard-textured background, with Start and Instructions buttons, the tagline 'Slice the ropes, dodge the walls, and feed Om Nom!', and a prompt to allow webcam access.",
      aspectRatio: '1600 / 900',
    },
    images: [
      {
        src: hungryOmNomGameplay,
        alt: 'Gameplay screen: a lollipop hanging from two ropes over a cardboard background, gold stars to collect, the green character waiting at the bottom, and a Level/Score/Lives readout in the top-left corner.',
        aspectRatio: '800 / 900',
      },
      {
        src: hungryOmNomBladeTrail,
        alt: 'The same gameplay scene with a white slicing trail cutting across one of the ropes, showing a finger-swipe cut in progress.',
        aspectRatio: '800 / 900',
      },
      {
        src: hungryOmNomLevel5,
        alt: 'A later level with the candy held by three ropes and scattered stars, score 60, showing increased difficulty.',
        aspectRatio: '800 / 900',
      },
      {
        src: hungryOmNomInstructions,
        alt: "A 'How To Play' card listing five rules — swipe to cut a rope, guide the candy into the mouth, grab stars for double points, don't miss the candy, and clear every level to win — each with an icon.",
        aspectRatio: '1600 / 900',
      },
      {
        src: hungryOmNomFigmaDesign,
        alt: "The game's screens being designed in Figma, showing the welcome and instructions layouts side by side in the editor with the layers panel.",
        aspectRatio: '2816 / 1576',
      },
      {
        src: hungryOmNomWin,
        alt: "A 'You Win!' end screen with a party emoji, a final score of 350, and a Play Again button.",
        aspectRatio: '1600 / 900',
      },
      {
        src: hungryOmNomGameOver,
        alt: "A 'Game Over' end screen showing a final score of 120 and a Play Again button.",
        aspectRatio: '1600 / 900',
      },
    ],
  },
  {
    id: 'pinklady',
    image: pinklady,
    alt: 'Three zombie-styled skaters stand on boards beneath an underpass.',
    tags: ['2025', 'Freelance Photography'],
    title: 'Pink Lady',
    description: 'The “Pink Lady” stands in contrast to everything around her',
    href: '/work/pinklady',
    overview:
      "She moves through the city like she doesn’t belong to its palette.  Dressed in layers of electric pink, the “Pink Lady” stands in contrast to everything around her; muted browns, worn brick, faded doors, and the quiet neutrality of everyday life. In a place where people often dress to blend in, to move unnoticed, she does the opposite. She takes up space.  This series explores that tension between individuality and environment. The city acts as both backdrop and resistance as its textures are rough, its colors subdued.  The Pink Lady introduces a softness, boldness, and a kind of unapologetic presence. She’s existing in the space differently and it's impossible to ignore.  Why do we choose to mute ourselves in public spaces? What does it mean to be seen brightly?",
    timeline: 'April 2024',
    type: 'Photography · Creative Direction · Fashion Styling',
    role: "Stylist and Photographer — I directed the shoot, styled the subject, and captured the images.",
    tools: [
      'Adobe Photoshop',
      'Adobe Lightroom',
      'Adobe Premiere Pro',
      'Canon EOS R5 · Canon RF 24-70mm f/2.8L IS USM Lens',
      'Canon RF 70-200mm f/2.8L IS USM Lens',
    ],
    heroImage: {
      src: imgp4,
      alt: 'Three zombie-styled skaters stand on boards beneath an underpass',
      aspectRatio: '2048 / 1365',
    },
    images: [
      {
        src: imgp1,
        alt: 'Three zombie-styled skaters pose beneath a graffiti-covered underpass',
        aspectRatio: '1365 / 2048',
      },
      {
        src: imgp2,
        alt: 'A zombie-styled skater balances on a skateboard at night',
        aspectRatio: '1365 / 2048',
      },
      {
        src: imgp4,
        alt: 'A zombie-styled skater balances on a skateboard at night',
        aspectRatio: '1365 / 2048',
      },
      {
        src: imgp3,
        alt: 'A skater holds a board beside a graffiti-covered wall',
        aspectRatio: '1365 / 2048',
      },
      {
        src: imgp5,
        alt: 'Three skaters enter a dark skate spot through a chain-link gate',
        aspectRatio: '1365 / 2048',
      },
      {
        src: imgp6,
        alt: 'Three skaters pose while production equipment remains visible',
        aspectRatio: '1365 / 2048',
      },
    ]
  },
]
