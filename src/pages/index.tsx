import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Bingo } from "@/components/Bingo";

const inter = Inter({ subsets: ["latin"] });

/*
 * B: 1~15 のうちいずれか
 * I: 16~30
 * N: 31~45 (真ん中がfree)
 * G: 46~60
 * O: 61~75
 */

export default function Home() {
  return (
    <>
      <Head>
        <title>Bingo Card!</title>
        <meta name="description" content="Bingo Card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Bingo />
        <Bingo />
        <Bingo />
        <Bingo />
      </main>
    </>
  );
}
