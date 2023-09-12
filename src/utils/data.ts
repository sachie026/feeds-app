export const reactions = [`👋`, `😞`, `💬`];

export interface Post {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: string;
  profilePic: string;
  feeling: number;
  message: string;
  commentsCount: number;
  isEdited?: boolean;
}
export const posts: Post[] = [
  {
    id: 1,
    firstName: "Theresa",
    lastName: "Webb",
    createdAt: "2023-09-12T09:22:31.571Z",
    profilePic:
      "https://media.gq.com/photos/56e853e7161e63486d04d6c8/1:1/w_1600,h_1600,c_limit/david-beckham-gq-0416-2.jpg",
    feeling: 0,
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    commentsCount: 24,
    isEdited: true,
  },
  {
    id: 2,
    firstName: "Marvin",
    lastName: "McKinney",
    createdAt: "2023-09-12T08:22:31.571Z",
    profilePic:
      "https://media.gq.com/photos/56e853e7161e63486d04d6c8/1:1/w_1600,h_1600,c_limit/david-beckham-gq-0416-2.jpg",
    feeling: 1,
    message:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 0,
  },
];
