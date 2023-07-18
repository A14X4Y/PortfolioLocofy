import { gql } from "@apollo/client";
import { password } from "@keystone-6/core/fields";

export const GET_POSTS = gql`
  query Query {
    posts {
      title
      content {
        document
      }
      author {
        name
      }
      tags {
        name
      }
    }
  }
`;
export const GET_POST_BY_ID = gql`
  query Query($where: PostWhereUniqueInput!) {
    post(where: $where) {
      title
      content {
        document
      }
      author {
        name
      }
      id
      tags {
        name
      }
    }
  }
`;
export const GET_POSTS_IDS = gql`
  query Query {
    posts {
      id
    }
  }
`;

export const CREATE_USER = (name, email, password) => `
  mutation {
    createUser(data: {
      name: "${name}",
      email: "${email}",
      password: "${password}"
    }) {
      id
      name
      email
    }
  }
`;

export const GET_USER_BY_ID = (userId) => `
  query {
    user(where: { id: "${userId}" }) {
      id
      name
      email
    }
  }
`;
