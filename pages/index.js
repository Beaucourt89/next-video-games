import Head from "next/head";
import { Layout } from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1>Home page</h1>
      </Layout>
      <footer className={styles.footer}></footer>
    </>
  );
}
