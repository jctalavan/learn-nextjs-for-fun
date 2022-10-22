export async function getUsersFromJsonPlaceHolder() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return users.map((singleUser) => {

    console.log(singleUser)
    return {
      id: singleUser.id,
      name: singleUser.name,
    };
  });
}
