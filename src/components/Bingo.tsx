import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateRandomNumbersOfArray(count: number, min: number, max: number) {
  const array = Array.from({ length: max - min }, (_, i) => i + 1 + min);

  return shuffleArray(array).splice(0, count);
}

/**
 *
 * @returns this components has bingo card
 */
export function Bingo() {
  const [b, setB] = useState<number[]>([]);
  const [i, setI] = useState<number[]>([]);
  const [n, setN] = useState<number[]>([]);
  const [g, setG] = useState<number[]>([]);
  const [o, setO] = useState<number[]>([]);

  function generate() {
    setB(generateRandomNumbersOfArray(5, 1, 15));
    setI(generateRandomNumbersOfArray(5, 16, 30));
    setN(generateRandomNumbersOfArray(5, 31, 45));
    setG(generateRandomNumbersOfArray(5, 46, 60));
    setO(generateRandomNumbersOfArray(5, 61, 75));
  }

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className={styles.bingoCardOuter}>
      <div className={styles.bingoCard}>
        <div className={styles.bingoRow}>
          {[1, 2, 3, 4, 5].map((row) => (
            <div
              className={`${styles.bingoHeaderCell} ${styles.bingoCell}`}
              key={row}
            >
              {row === 1 && "B"}
              {row === 2 && "I"}
              {row === 3 && "N"}
              {row === 4 && "G"}
              {row === 5 && "O"}
            </div>
          ))}
        </div>
        {[1, 2, 3, 4, 5].map((row) => (
          <div className={styles.bingoRow} key={row}>
            {[1, 2, 3, 4, 5].map((col) => {
              if (col === 3 && row === 3) {
                return (
                  <div className={styles.bingoCell} key={col}>
                    👑
                  </div>
                );
              } else {
                return (
                  <div className={styles.bingoCell} key={col}>
                    {col === 1 && <>{b[row - 1] === 8 ? "🎱" : b[row - 1]}</>}
                    {col === 2 && i[row - 1]}
                    {col === 3 && n[row - 1]}
                    {col === 4 && g[row - 1]}
                    {col === 5 && o[row - 1]}
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
