import React from "react";
import axios from "axios";
import Head from "next/head";
import Carousel from "react-bootstrap/Carousel"


const Platform = ({ data }) => {

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div>
       <h1>{data.name}</h1>
       <div>
       {/* <img src={data.cover.url}/> */}
       </div>
        {JSON.stringify(data)}
      </div>
     { data.screenshots ? 
                <Carousel>
                        {
                            data.screenshots.map((screen, index) => {
                                return (
                                <Carousel.Item key={screen.url}>
                                    <img
                                    className="d-block w-100"
                                    src={screen.url}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                )
                            })
                        }
                </Carousel>
                : null }
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
