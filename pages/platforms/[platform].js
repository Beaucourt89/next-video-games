import React from "react";
import Head from "next/head";
import { getDatabase } from "../../src/database";
import { Layout } from "../../components/layout";

const Platform = ({ platforms }) => {
  return (
    <>
      <Head>
        <title>{platforms.name}</title>
      </Head>
      <Layout>
        <div className="m-2">
          <h1>{platforms.name}</h1>
          <div>
            <img src={platforms.platform_logo.url} />
          </div>
          <p>{platforms.summary}</p>
          <hr />
          <h2>Jeux de la console : {platforms.name}</h2>
          <ul className="d-flex flex-wrap p-1">
            {platforms.games.map((platform) => (
              <li className="p-1">
                <img src={platform.cover.url} />
              </li>
            ))}
          </ul>
        </div>
        <div>{JSON.stringify(platforms)}</div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const mongodb = await getDatabase();
  const code = context.params.platform;
  console.log("Code", code);
  const platforms = await mongodb
    .db()
    .collection("platforms")
    .findOne({ slug: code });
  //console.log(platforms);
  return {
    props: {
      platforms: JSON.parse(JSON.stringify(platforms)),
    },
  };
}

export default Platform;
