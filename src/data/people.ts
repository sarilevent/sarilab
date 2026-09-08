import { site } from "./site";

export const people = [
  {
    name: "Levent Sari, Ph.D.",
    role: site.title,
    division: site.researchDivision,
    office: site.office,
    email: site.email,
    education: site.education,
    image: site.profilePhoto,
    bio: "I received my Ph.D. in Computational Quantum Chemistry from the University of Georgia, where I worked with Henry F. Schaefer, and subsequently completed my postdoctoral training at the University of Michigan, working with Ioan Andricioaei. Before joining the University of Houston, I spent approximately nine years as a Senior Research Scientist in the Department of Bioinformatics at UT Southwestern Medical Center.",
    links: [
      { label: "UH Faculty Profile", href: site.facultyProfile },
      { label: "Google Scholar", href: site.googleScholar },
    ],
  },
  {
    name: "Postdoctoral Researcher",
    role: "Open position",
    bio: "We are recruiting researchers interested in protein aggregation, biophysics, molecular simulation, AI-guided molecular design, and experimental validation.",
  },
  {
    name: "Graduate Students",
    role: "Future lab members",
    bio: "Prospective students interested in computational biophysics, structural biology, machine learning, protein aggregation, or experimental biophysics are encouraged to contact us.",
  },
];
