import zoezi from './src/assets/fitness.png';
import doktary from './src/assets/onaDoc.png';
import safiri from './src/assets/safiriii.png';
import CatWiki from './src/assets/cat.png';
import windbnb from './src/assets/stays.png';
import DevFinder from './src/assets/devfinder.png';
import gymit from './src/assets/gymit.png';
import crappo from './src/assets/crappo.png';

const MyProjects = [

  {
    name: 'gymIt',
    experience: {
      company: 'Freelance',
      role: 'Front End Dev',
      year: 2023,
    },
    description: 'A gym web application',
    featuredImage: gymit,
    technologies: [
      'Nextjs', 'Typescript', 'Tailwind CSS',
    ],
    liveDemo: 'https://gymit.vercel.app/',
    sourceCode: 'https://github.com/rosemutai/gymIt'
  },

  {
    name: 'CRAPPO',
    experience: {
      company: 'Freelance',
      role: 'Front End Dev',
      year: 2023,
    },
    description: 'A Crypto Web App',
    featuredImage: crappo,
    technologies: [
      'React', 'Tailwind CSS',
    ],
    liveDemo: 'https://crappo-osb6vn8gm-rosemutai.vercel.app/',
    sourceCode: 'https://github.com/rosemutai/crappo'
  },

  {
    name: 'zoeziFitness',
    experience: {
      company: 'Microverse',
      role: 'Front End Dev',
      year: 2023,
    },
    description: 'A gym web application',
    featuredImage: zoezi,
    technologies: [
      'Typescript', 'Tailwind CSS',
    ],
    liveDemo: 'https://zoezifitness-e2deb.web.app/',
    sourceCode: 'https://github.com/rosemutai/fitnessApp'
  },

  {
    name: 'Doktary',
    experience: {
      company: 'Microverse',
      role: 'Front End Dev',
      year: 2023,
    },
    description: 'A doctor booking appointment web application',
    featuredImage: doktary,
    technologies: [
      'React', 'Tailwind CSS',
    ],
    liveDemo: 'https://onadoktary.netlify.app/',
    sourceCode: 'https://github.com/rosemutai/doktary'
  },

  {
    name: 'Safirii',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'A travelling experience web application',
    featuredImage: safiri,
    technologies: [
      'React', 'Tailwind CSS',
    ],
    liveDemo: 'https://safiriapp.netlify.app/',
    sourceCode: 'https://github.com/rosemutai/travelApp'
  },

  {
    name: 'CatWiki',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'Get information about cats by consuming the ninjas cat API',
    featuredImage: CatWiki,
    technologies: [
      'Typescript', 'Tailwind CSS',
    ],
    liveDemo: 'https://rosemutai.github.io/catWiki/',
    sourceCode: 'https://github.com/rosemutai/catWiki'
  },

  {
    name: 'windbnb',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'Find any stayay in Finland by searching.',
    featuredImage: windbnb,
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveDemo: 'https://rosemutai.github.io/windbnb/',
    sourceCode: 'https://github.com/rosemutai/windbnb'
  },

  {
    name: 'DevFinder',
    experience: {
      company: 'canopy',
      role: 'Back End Dev',
      year: 2015,
    },
    description: 'Find any GitHub user by their username',
    featuredImage: DevFinder,
    technologies: [
      'html', 'css', 'javascript',
    ],
    liveDemo: 'https://devfinder-508c9.web.app/',
    sourceCode: 'https://rosemutai.github.io/My-Portfolio/'
  },
];

export default MyProjects;