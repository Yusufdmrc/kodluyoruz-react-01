import axios from "axios";

async function getData(Number) {
  try {
    async function getUser(Number) {
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + Number
      );
      console.log(users);
    }

    async function getPost(Number) {
      const { data: posts } = await axios(
        "https://jsonplaceholder.typicode.com/posts?id=" + Number
      );
      console.log(posts);
    }

    const userId = await getUser(Number);
    const postId = await getPost(Number);
    return userId + postId;
  } catch (e) {
    console.log(e);
  }
}

export default getData;
