import React from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

const Platform = ({ data }) => {
  //   const router = useRouter();
  //   console.log("la route est : " + router.query);
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div>
       <h1>{data.name}</h1>
       <div>
       <img src={data.cover.url}/>
       </div>
        {JSON.stringify(data)}
      </div>
    </>
  );
};
export const getServerSideProps = async (context) => {
  console.log(context.params.game);
  const slug = context.params.game;
  const url = `https://happy-team-games.herokuapp.com/games/${slug}`;
  const { data } = await axios.get(url, {
    headers: { Accept: "application/json" },
  });
  return {
    props: {
      data,
    },
  };
};
export default Platform;
