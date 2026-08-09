export type Solution = {
  slug: string;
  title: string;
  path: string;
  summary: string;
  capabilities: string[];
};

export const solutions: Solution[] = [
  {
    slug: "data-centre",
    title: "Data Centre Solutions",
    path: "/solutions/data-centre",
    summary:
      "Dedicated facilities housing IT infrastructure like servers, storage, and networking gear, providing centralized, secure, and reliable computing power.",
    capabilities: [
      "Software & Servers",
      "Storage & Backup",
      "Networking Infrastructure",
      "Environment Monitoring",
    ],
  },
  {
    slug: "information-security",
    title: "Information Security",
    path: "/solutions/information-security",
    summary:
      "Protecting information and systems from unauthorized access with a combination of technologies, processes, and administrative controls.",
    capabilities: [
      "Cloud Security",
      "Incident Response",
      "Vulnerability Management",
      "Cryptography",
    ],
  },
  {
    slug: "it-service-management",
    title: "IT Service Management",
    path: "/solutions/it-service-management",
    summary:
      "Designing, delivering, managing, and improving IT services to meet business goals while focusing on end-user experience.",
    capabilities: [
      "Asset Management",
      "Change Management",
      "Service Desk",
      "Problem Management",
    ],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure Solutions",
    path: "/solutions/infrastructure",
    summary:
      "Combination of hardware, software, network and components that support business operations and serve as the foundation for IT services.",
    capabilities: [
      "Physical Hardware",
      "Software Applications",
      "Cloud Services",
      "Data Storage",
    ],
  },
];

export const company = {
  name: "Teather Connect",
  tagline: "Innovative IT Solutions & Technology Services",
  description:
    "Teather Connect delivers comprehensive IT and communications solutions for enterprise businesses, designed to improve operational efficiency, foster innovation, and reduce costs.",
  values: [
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and open communication to drive success.",
    },
    {
      title: "Agility",
      description:
        "We provide technologies that quickly adapt to modern changing trends.",
    },
    {
      title: "Security & Privacy",
      description:
        "We are dedicated to maintaining confidentiality and safeguarding data.",
    },
  ],
  pages: [
    { title: "Home", path: "/" },
    { title: "Solutions", path: "/solutions" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ],
  contact: {
    enquiries: "Use the contact form on the /contact page to reach the team.",
    contactPage: "/contact",
  },
};
