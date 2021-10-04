import Image from "next/image";
import client from "../../apollo-client";
import Layout from "../../components/layout/Layout";
import { GET_TEAM } from "../../queries/team/get-team";

export default function Teams({ data }) {
  const team = data.teams.edges || [];

  return (
    <Layout data={data}>
      <h1 className="text-main-heading mt-14 mb-12 pl-5">Who we are</h1>

      <div className="flex flex-wrap">
        {team.map((member) => (
          <div className="w-1/3 mb-12  px-5" key={member.node.id}>
            <div className="border-b-2 border-black pb-8 relative">
              <Image
                src={member.node.featuredImage.node.sourceUrl}
                alt={member.node.title}
                layout="fill"
                className="object-fit "
              />
              <h3 className="text-3xl">{member.node.title}</h3>
              <p className="text-orange">
                {member.node.teamMeta.teamDesignation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_TEAM,
  });

  return {
    props: { data },
  };
}
