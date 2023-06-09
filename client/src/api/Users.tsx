import User from "../interfaces/user";

export const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Couldn't fetch any data!");
  }

  const data: User[] = await response.json();

  return data;

};
