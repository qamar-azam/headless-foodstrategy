import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import client from "../../apollo-client";
import { useRouter } from "next/dist/client/router";

import { GET_POST, GET_POST_BY_SLUGS } from "../../queries/news/get-posts";
import Layout from "../../components/layout/Layout";

export default function SinglePost({ data }) {
  const router = useRouter();
  const post = data.post;

  return (
    <Layout data={data}>
      <Head>
        <title>Blog - {post.title} </title>
      </Head>
      {router.isFallback && <p>Loading…</p>}

      <main>
        <h2 className="text-4xl my-8 ">{post.title} </h2>
        <Link href={"/news"}>
          <a className="inline-block bg-orange text-white px-6 py-2 mb-8 rounded">
            Back
          </a>
        </Link>
        <figure
          className="relative mb-12"
          style={{ width: "100%", height: "400px" }}
        >
          <Image src={post.featuredImage.node.sourceUrl} alt="" layout="fill" />
        </figure>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_POST,
    variables: {
      id: params.slug,
    },
  });
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_POST_BY_SLUGS,
  });

  return {
    paths: data.posts.edges.map(({ node }) => `/news/${node.slug}`) || [],
    fallback: true,
  };
}
