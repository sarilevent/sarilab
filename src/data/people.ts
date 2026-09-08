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
    bio: "Dr. Sari leads an interdisciplinary program that combines computational biophysics, molecular simulation, AI-guided molecular design, and biochemical/biophysical experiments to study protein aggregation and neurodegenerative disease mechanisms.",
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
