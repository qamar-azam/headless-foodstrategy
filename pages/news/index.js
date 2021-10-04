import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import client from "../../apollo-client";

import Footer from "../../components/footer/Footer";
import { GET_POSTS } from "../../queries/news/get-posts";
import Layout from "../../components/layout/Layout";

const Blog = ({ data }) => {
  const posts = data.posts.edges;
  return (
    <Layout data={data}>
      <Head>
        <title>Blog articles page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-main-heading mt-14 mb-12 pl-5">
          Latest blog articles
        </h1>

        <section className="flex flex-wrap">
          {posts.map(({ node }) => (
            <div className="w-1/3 mb-12  px-5" key={node.id}>
              <div className="border-t-4 border-orange pt-5">
                <h2 className="min-h-8 mb-8">{node.title}</h2>
                <div className="relative h-40">
                  <Link href={`/news/${node.slug}`}>
                    <a>
                      <Image
                        src={node.featuredImage.node.sourceUrl}
                        alt={node.title}
                        layout="fill"
                        className="object-fit "
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_POSTS,
  });

  return {
    props: { data },
  };
}
