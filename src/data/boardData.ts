export type BOARDTYPE = {
  name: string;
  img: string;
  boardPosition: string;
  title: string;
  email: string;
};

export const BOARDDATA: BOARDTYPE[] = [
  {
    boardPosition: "Faculty Adviser",
    name: "Professor John Doe",
    title: "Department of Business",
    email: "123@gmail.com",
    img: "/public/boardPlaceholder.webp",
  },
  {
    boardPosition: "President",
    name: "Jane Doe",
    title: "4th year - Business Economics",
    email: "123@gmail.com",
    img: "/public/boardPlaceholder.webp",
  },
];
