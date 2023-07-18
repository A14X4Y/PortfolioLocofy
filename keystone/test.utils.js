import { context } from "../keystone.test";
import { createUserData, createPostData } from "./utils";
import { CREATE_USER, GET_USER_BY_ID } from "../gql";

const createUser = async (...props) => {
  if (props.length > 0 && props[0].name) {
    const { name, email, password } = props[0];

    const createUserResult = await context.graphql.run({
      query: CREATE_USER(name, email, password),
    });
    return { userData: { name, email, password }, createUserResult };
  }

  const { name, email, password } = createUserData();
  const createUserResult = await context.graphql.run({
    query: CREATE_USER(name, email, password),
  });
  return { userData: { name, email, password }, createUserResult };
};

const getUserById = async (id) => {
  return await context.graphql.run({
    query: GET_USER_BY_ID(id),
  });
};

const createPost = async (authorId) => {
  const data = createPostData();
  const createPostResult = await context.graphql.run({
    query: `
    mutation ($data: PostCreateInput!) {
      createPost(data: $data) {
        id
        title
        content {
          document
        }
      }
    }
    `,
    variables: data,
  });
  return { post, createPostResult };
};

export { createUser, getUserById, createPost };
