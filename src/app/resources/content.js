import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gaylor",
  lastName: "Loche",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Développeur - Entrepreneur",
  avatar: "/images/avatar.png",
  location: "Europe/Paris", // IANA timezone
  languages: ["Français"], // langue unique
};

const newsletter = {
  display: false, // désactiver la newsletter
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lynxerinc",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/max-lot-319896230/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:lochegaylor@icloud.com",
  },
];

const home = {
  label: "Accueil",
  title: `Portfolio de ${person.name}`,
  description: `Fondateur et gérant d'une entreprise de formation, d'octroi de crédit et de vente de montres de luxe. Diplômé en développement et ingénierie informatique, titulaire d'un BTS en sciences économiques et politiques. Passionné par l'innovation, je remets en question les fondamentaux et aide à trouver de nouvelles solutions.`,
  headline: <>Développeur - Entrepreneur</>,
  subline: (
    <>
      Fondateur et dirigeant d'entreprises dans la formation, le crédit et la revente de montres de luxe. Diplômé en développement et ingénierie informatique et titulaire d'un BTS en sciences économiques et politiques, je repense les fondamentaux pour concevoir des solutions innovantes.
    </>
  ),
};


const about = {
  label: "À propos",
  title: "À propos de moi",
  description: `Découvrez ${person.name}, ${person.role} basé en ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionné par la création de solutions innovantes. Fort d'une double formation en développement informatique et en sciences économiques et politiques, j'ai fondé plusieurs entreprises dans des secteurs variés, alliant technologie, finance et commerce de luxe.
      </>
    ),
  },
  work: {
    display: true,
    title: "Expériences professionnelles",
    experiences: [      
      {
        company: "WatchX",
        timeframe: "2025 - Présent",
        role: "Fondateur et Gérant",
        achievements: [
          <>Développement d'une activité d'achat-revente de montres de luxe avec stratégie multicanal.</>,
          <>Optimisation logistique et positionnement haut de gamme.</>,
        ],
        images: [],
      },
      {
        company: "Formacash",
        timeframe: "2024 - Présent",
        role: "Fondateur et Gérant",
        achievements: [
          <>Vente de formations en développement informatique avec accompagnement personnalisé.</>,
          <>Coordination des équipes, définition du business model et gestion financière de l'entreprise.</>,
        ],
        images: [],
      },
      {
        company: "Quickfund",
        timeframe: "2024 - Présent",
        role: "Fondateur et Gérant",
        achievements: [
          <>Création d'une société d'octroi de crédits adaptée aux besoins individuels des clients.</>,
          <>Gestion complète des dossiers clients, trésorerie et placements financiers.</>,
        ],
        images: [],
      },
      {
        company: "La Casa de Las Carcasas",
        timeframe: "2024/03 - 2025/03",
        role: "Conseiller de vente",
        achievements: [
          <>Accueil personnalisé et accompagnement dynamique du client tout au long du processus de vente.</>,
        ],
        images: [],
      },
      {
        company: "McDonald's",
        timeframe: "2023/02 - 2024/07",
        role: "Responsable point de vente",
        achievements: [
          <>Supervision des équipiers et respect strict des normes d'hygiène et des procédures de service.</>,
        ],
        images: [],
      },
      {
        company: "BPCE",
        timeframe: "2022/07 - 2023/01",
        role: "Pentester junior",
        achievements: [
          <>Réalisation de tests d'intrusion et analyse des vulnérabilités pour la Caisse d'Épargne.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Formations",
    institutions: [
      {
        name: "DUT - Développement et Ingénierie Informatique",
        description: <>Compétences en développement logiciel, sécurité informatique et architecture système.</>,
      },
      {
        name: "BTS Sciences Économiques et Politiques",
        description: <>Analyse économique, droit, sciences politiques et gestion.</>,
      },
      {
        name: "DEUST Informatique",
        description: <>Formation en informatique générale suivie à Paris et en distanciel.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Compétences techniques",
    skills: [
      {
        title: "Développement web",
        description: <>Création d'applications avec Next.js, TailwindCSS et Supabase.</>,
        images: [],
      },
      {
        title: "Blockchain & Crypto",
        description: <>Mise en œuvre de solutions basées sur Ethereum, Geth, et Smart Contracts.</>,
        images: [],
      },
      {
        title: "No-code & Automatisation",
        description: <>Développement de workflows automatisés avec Bubble, Zapier et Webflow.</>,
        images: [],
      },
    ],
  },
};



const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projets",
  title: "Mes projets",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
