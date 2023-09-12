export interface Post {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: string;
  profilePic: string;
  feeling: number;
  message: string;
  commentsCount: number;
}
export const posts: Post[] = [
  {
    id: 1,
    firstName: "Theresa",
    lastName: "Webb",
    createdAt: "2023-09-12T09:22:31.571Z",
    profilePic:
      "https://www.elfutbolero.us/__export/1626407849612/sites/elfutboleromx/img/2021/07/15/befunky-collage_-_2021-07-15t225614_239.jpg_1169307048.jpg",
    feeling: 1,
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 24,
  },
  {
    id: 2,
    firstName: "Marvin",
    lastName: "McKinney",
    createdAt: "2023-09-12T08:22:31.571Z",
    profilePic:
      "https://www.elfutbolero.us/__export/1626407849612/sites/elfutboleromx/img/2021/07/15/befunky-collage_-_2021-07-15t225614_239.jpg_1169307048.jpg",
    feeling: 2,
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 24,
  },
];
