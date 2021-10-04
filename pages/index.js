import Head from "next/head";
import client from "../apollo-client";
import Layout from "../components/layout/Layout";
import { GET_FRONT_PAGE } from "../queries/pages/get-pages";

export default function Home({ data }) {
  const page = data.pageBy;
  return (
    <Layout data={data}>
      <Head>
        <title>Food Strategy</title>
        <meta name="description" content="Food Strategy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_FRONT_PAGE,
  });

  return {
    props: { data },
  };
}
