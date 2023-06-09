import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Bingo } from "@/components/Bingo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bingo Card!</title>
        <meta name="description" content="Bingo Card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1>Bingo Card</h1>
      </main>
    </>
  );
}
