import User from "../interfaces/user";

const getData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Couldn't fetch any data!");
  }

  const data: User[] = await response.json();

  return data;
  
};
export default getData;