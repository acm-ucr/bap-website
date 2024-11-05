interface data {
  name: string;
  link?: string;
  sub?: {
    name: string;
    link: string;
  }[];
}

export const navData: data[] = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Board",
    link: "/board",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Membership",
    link: "/membership",
  },
  {
    name: "Resources",
    sub: [
      { name: "Resume", link: "/resources/resume" },
      { name: "Cover Letter", link: "/resources/cover" },
      { name: "Interviewing", link: "/resources/interview" },
      { name: "Professionalism", link: "/resources/prof" },
    ],
  },
];
