import { useState } from "react";

export interface User {
  firstname: string;
  lastname: string;
  // To-do: add other properties
}

const userData = {
  firstname: "Jane",
  lastname: "Potter",
};

function useUser() {
  const [user] = useState<User>(userData);

  return {
    user: user,
  };
}

export default useUser;
