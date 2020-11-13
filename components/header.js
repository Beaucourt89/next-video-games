import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  // console.log(router);
  const styles = {
    header: {
      margin: 20,
      padding: 20,
      border: "1px solid #DDD",
    },
    link: {
      margin: 15,
    },
    active: {
      margin: 15,
      color: "blue"
    }
  };
  return (
    <div style={styles.header}>
      <Link href="/" passHref>
        <span style={router.pathname === "/" ? styles.active : styles.link}>Home</span>
      </Link>
      <Link href="/games/games" passHref>
        <span style={router.pathname === "/games/games" ? styles.active : styles.link}>Games</span>
      </Link>
      <Link href="/platforms/platforms" passHref>
        <span style={router.pathname === "/platforms/platforms" ? styles.active : styles.link}>Platforms</span>
      </Link>
    </div> 
  );
};
