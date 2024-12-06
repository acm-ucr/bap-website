export interface MEMBER {
  name: string;
  boardPosition: string;
}

export type PREVBOARDTYPE = {
  year: string;
  members: MEMBER[];
  open: boolean;
};

export const PREVBOARDDATA: PREVBOARDTYPE[] = [
  {
    year: "2023-2024",
    open: false,
    members: [
      {
        name: "Prof Daniel Almendarez",
        boardPosition: "Faculty Advisor",
      },
      {
        boardPosition: "Senior Advisor",
        name: "Kylie Fung",
      },
      {
        boardPosition: "President",
        name: "Alison Wu",
      },
      {
        boardPosition: "Executive Vice President",
        name: "Tanya Tang",
      },
      {
        boardPosition: "Vice President of Membership",
        name: "Chris Amaro",
      },
      {
        boardPosition: "Vice President of Correspondence",
        name: "Rachel Chen",
      },
      {
        boardPosition: "Vice President of Finance",
        name: "Ivan Chen",
      },
      {
        boardPosition: "Vice President of Marketing",
        name: "Anna Wu",
      },
      {
        boardPosition: "Vice President of External Relations",
        name: "Jacqueline Ceja",
      },
      {
        boardPosition: "Vice President of Internal Affairs",
        name: "Matthew Lam",
      },
    ],
  },
  {
    year: "2022-2023",
    open: false,
    members: [
      {
        name: "Prof Naman Desai",
        boardPosition: "Faculty Advisor",
      },
      {
        boardPosition: "Senior Advisor",
        name: "May Chhur",
      },
      {
        boardPosition: "Co-President",
        name: "Trinh Tran",
      },
      {
        boardPosition: "Co-President",
        name: "Alison Wu",
      },
      {
        boardPosition: "Vice President of Membership",
        name: "Ruqi Wang",
      },
      {
        boardPosition: "Vice President of Correspondence",
        name: "Kaylee Dang",
      },
      {
        boardPosition: "Vice President of Finance",
        name: "Tanya Tang",
      },
      {
        boardPosition: "Vice President of Marketing",
        name: "Ashley Dang",
      },
      {
        boardPosition: "Vice President of External Relations",
        name: "Wendy Yang",
      },
      {
        boardPosition: "Vice President of Internal Affairs",
        name: "Kylie Fung",
      },
    ],
  },
  {
    year: "2021-2022",
    open: false,
    members: [
      {
        name: "Prof Naman Desai",
        boardPosition: "Faculty Advisor",
      },
      {
        boardPosition: "Senior Advisor",
        name: "Joanne Fu",
      },
      {
        boardPosition: "Senior Advisor",
        name: "Kevin Kim",
      },
      {
        boardPosition: "Co-President",
        name: "May Chhur",
      },
      {
        boardPosition: "Co-President",
        name: "Mandy Tsai",
      },
      {
        boardPosition: "Vice President of Membership",
        name: "Ryan Kim",
      },
      {
        boardPosition: "Vice President of Correspondence",
        name: "Hannah Cho",
      },
      {
        boardPosition: "Vice President of Finance",
        name: "Austin Yang",
      },
      {
        boardPosition: "Vice President of Marketing",
        name: "Trinh Tran",
      },
      {
        boardPosition: "Vice President of External Relations",
        name: "Steven Hyunh",
      },
      {
        boardPosition: "Vice President of Internal Affairs",
        name: "Alison Wu",
      },
    ],
  },
  {
    year: "2020-2021",
    open: false,
    members: [
      {
        name: "Prof Richard Savich",
        boardPosition: "Faculty Advisor",
      },
      {
        boardPosition: "Co-President",
        name: "Joanne Fu",
      },
      {
        boardPosition: "Co-President",
        name: "Kevin Kim",
      },
      {
        boardPosition: "Vice President of Membership",
        name: "May Chhur",
      },
      {
        boardPosition: "Vice President of Correspondence",
        name: "Mandy Tsai",
      },
      {
        boardPosition: "Vice President of Finance",
        name: "Johnny Cheng",
      },
      {
        boardPosition: "Vice President of External Relations",
        name: "Joshua Eng",
      },
      {
        boardPosition: "Special Events Coordinator",
        name: "Lynette Lee",
      },
    ],
  },
];
