import User from "../interfaces/user";

function getUsers(): Promise<User[]> {
  const headers: Headers = new Headers();

  headers.set('Content-Type', 'application/json');

  const request: RequestInfo = new Request("https://jsonplaceholder.typicode.com/users", {
    method: 'GET',
    headers: headers
  });

  return fetch(request)
    .then(data => data.json())
    .then(data => {
      return data as User[];
    });
}

getUsers()
  .then(users => {
    users.map(user => console.log(user)
    );
  });
export default getUsers;