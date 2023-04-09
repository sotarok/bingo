import Head from "next/head";
import styles from "@/styles/Print.module.css";
import { Bingo } from "@/components/Bingo";
import { useEffect } from "react";

export default function Print() {
  useEffect(() => {
    //window.print();
  }, []);

  return (
    <>
      <Head>
        <title>Bingo Card!</title>
        <meta name="description" content="Bingo Card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.printablePage}>
        <Bingo />
        <Bingo />
        <Bingo />
        <Bingo />
      </main>
    </>
  );
}
