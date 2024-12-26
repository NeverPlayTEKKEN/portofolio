import Link from "next/link";
import styles from "./index.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.name}>
        <p>Naoki</p>
        <p>Okamoto</p>
      </section>
      <section className={styles.links}>
        <Link href="/sample-site" className={styles.link}><div className={styles.circle}></div><p className={styles.label}>サンプルサイト</p></Link>
        <Link href="/with-ts" className={styles.link} ><div className={styles.circle}></div><p className={styles.label}>TypeScriptであそぶ</p></Link>
        <Link href="/" className={styles.link}><div className={styles.circle}></div><p className={styles.label}>わたしについて</p></Link>
      </section>
    </main>

  );
}
