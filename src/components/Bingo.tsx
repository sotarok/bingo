import styles from "@/styles/Home.module.css";

function generateRandomNumbersOfArray(count: number, min: number, max: number) {
  const array: number[] = [];
  while (array.length < count) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    if (array.find((n) => n === random)) {
      continue;
    }
    array.push(random);
  }

  return array;
}

/**
 *
 * @returns this components has bingo card
 */
export function Bingo() {
  // generate array of random number, array 5 items and it is froms 1 to 15
  const b = generateRandomNumbersOfArray(5, 1, 15);
  const i = generateRandomNumbersOfArray(5, 16, 30);
  const n = generateRandomNumbersOfArray(5, 31, 45);
  const g = generateRandomNumbersOfArray(5, 46, 60);
  const o = generateRandomNumbersOfArray(5, 61, 75);

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
