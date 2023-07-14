import React from 'react';
import { client } from '../../apolloClient';
import { GET_POSTS, GET_POST_BY_ID, GET_POSTS_IDS } from '../../gql';
import Head from 'next/head';
import { DocumentRenderer } from '@keystone-6/document-renderer';

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_POSTS_IDS,
  });
  const paths = data.posts.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const variables = {
    where: {
      id: id,
    },
  };
  const { data } = await client.query({
    query: GET_POST_BY_ID,
    variables,
  });
  return {
    props: {
      post: data.post || null,
    },
  };
};

export default function Post({ post }) {
  const { id, title, tags, content } = post;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <h3>{title}</h3>
        <p>ID: {id}</p>
        <p>Tags Count: {tags.length}</p>
        <DocumentRenderer document={content.document} />
      </div>
    </>
  );
}
