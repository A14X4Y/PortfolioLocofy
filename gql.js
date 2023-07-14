import { gql } from '@apollo/client';

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
