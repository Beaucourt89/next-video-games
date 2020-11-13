import React from "react";
import { Layout } from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../../src/database";

const Platforms = ({ platforms }) => {
  const styles = {
    main: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid #DDD",
    },
  };
  return (
    <>
      <Head>
        <title>Liste des platforms</title>
      </Head>
      <Layout>
        <h1>Platforms</h1>
        <ul>
          {platforms.map((platform) => (
            <li style={styles} key={platform.slug}>
              <Link
                href="/platforms/[platform]"
                as={`/platforms/${platform.slug}`}
                passHref
              >
                <div>
                  <img src={platform.platform_logo.url} />
                </div>
              </Link>
              {platform.summary}
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const mongodb = await getDatabase();

  const platforms = await mongodb.db().collection("platforms").find().toArray();
  //  console.log(platforms);
  return {
    props: {
      platforms: JSON.parse(JSON.stringify(platforms)),
    },
  };
}

export default Platforms;
