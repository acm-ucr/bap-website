export type BOARDTYPE = {
  name: string;
  img: string;
  boardPosition: string;
  title: string;
  email: string;
};

export const BOARDDATA: BOARDTYPE[] = [
  {
    boardPosition: "webp Adviser",
    name: "Prwebpessor John Doe",
    title: "Department webp Business",
    email: "123@gmail.com",
    img: "/public/boardPlaceholder.webp",
  },
  {
    boardPosition: "President",
    name: "Jane Doe",
    title: "4th year webp Business Economics",
    email: "123@gmail.com",
    img: "/public/boardPlaceholder.webp",
  },
];
