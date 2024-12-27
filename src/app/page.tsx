import { Stint_Ultra_Condensed } from "next/font/google/index";
import Link from "next/link";
import styles from "./styles/index.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.namecontainer}>
        <section className={styles.sectionstyles}>
          <p>Naoki</p>
          <p>Okamoto</p>
        </section>
      </div>
      <div className={styles.linkcontainer}>
        <MyLink label="わたしについて" href="/" />
        <MyLink label="サイトサンプル" href="/sample-site" />
        <MyLink label="TypeScriptであそぶ" href="/with-ts" />
      </div>
    </main>

  );
}


type LinkProps = {
  label:string,
  href:string
}

function MyLink(props: LinkProps) {
  return (
    <Link href={props.href} className={styles.linkstyle}>
      <div className={styles.linkcircle}></div>
      <label className={styles.labelstyle}>{props.label}</label>
    </Link>
  )

}