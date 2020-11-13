import React from "react";
import { Layout } from "../../components/layout";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
// import { getDatabase } from "../src/database";

const Games = ({ data }) => {
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
        <title>Liste des games</title>
      </Head>
      <Layout>
        <h1>Games</h1>
        {/* <div>{JSON.stringify(data)}</div> */}
        {data.map((games) => (
          <Link href="/games/[game]" as={`/games/${games.slug}`} passHref>
            <div key={games._id} style={styles.main}>
              <h1>{games.name}</h1>
              <div>{games.summary}</div>
              <hr />
              <div>SLUG : {games.slug}</div>
            </div>
          </Link>
        ))}
      </Layout>
    </>
  );
};
export async function getServerSideProps(context) {
  //ajout de l'url de l'api
  const url = "https://happy-team-games.herokuapp.com/games";
  const { data } = await axios.get(url, {
    headers: { Accept: "application/json" },
  });

  return {
    props: {
      data,
    },
  };
}


export default Games;
