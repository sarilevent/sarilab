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
    bio: "I received my Ph.D. in Computational Quantum Chemistry from the University of Georgia, where I worked with Henry F. Schaefer, and subsequently completed my postdoctoral training at the University of Michigan with Ioan Andricioaei. Before joining the University of Houston, I spent approximately nine years as a Senior Research Scientist in the Department of Bioinformatics at UT Southwestern Medical Center. At UTSW, I worked primarily in Milo Lin’s lab while developing close research collaborations with Lukasz Joachimiak and Marc Diamond at the Center for Alzheimer’s and Neurodegenerative Diseases, as well as with Jose Rizo-Rey in the Department of Biophysics. I continue to collaborate closely with several of these colleagues on ongoing research projects.",
    links: [
      { label: "UH Faculty Profile", href: site.facultyProfile },
      { label: "Google Scholar", href: site.googleScholar },
    ],
  },
  {
    name: "Postdoctoral Researcher",
    role: "Open position",
    bio: "An immediate postdoctoral research position is available. We are seeking a motivated postdoctoral researcher who will play a key role in developing and leading the wet-lab component of our research program while working closely with a team of computational scientists.",
  },
  {
    name: "Graduate & Undergraduate Students",
    role: "Future lab members",
    bio: "Prospective students interested in computational biophysics, structural biology, machine learning, protein aggregation, or experimental biophysics are encouraged to contact us.",
  },
];
