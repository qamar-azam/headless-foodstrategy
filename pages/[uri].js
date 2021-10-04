import client from "../apollo-client";
import Layout from "../components/layout/Layout";
import { GET_PAGE_BY_URI, GET_PAGE } from "../queries/pages/get-pages";

export default function Page({ data }) {
  const page = data.page;
  return (
    <Layout data={data}>
      <h1 className="text-main-heading mt-14 mb-12 pl-5">{page?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page?.content }}></div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_PAGE,
    variables: { id: params.uri },
  });

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGE_BY_URI,
  });

  let pathArray = [];
  data.pages.edges.map(({ node }) => {
    if (node.uri !== "/") {
      pathArray.push(node.uri);
    }
  });

  return {
    paths: pathArray,
    fallback: true,
  };
}
