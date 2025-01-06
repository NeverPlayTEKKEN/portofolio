import Link from "next/link";
import styles from "./styles/index.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.namecontainer}>
      </div>
      <section className={styles.sectionstyles}>
        <div>
          <p>Naoki</p>
          <p>Okamoto</p>
        </div>
      </section>
      
      <div className={styles.linkcontainer}>
        <MyLink label="わたしについて" href="/" waitsec={1}/>
        <MyLink label="サイトサンプル" href="/sample-site" waitsec={1.5}/>
        <MyLink label="TypeScriptであそぶ" href="/with-ts" waitsec={2}/>
      </div>
    </main>

  );
}


type LinkProps = {
  label:string,
  href:string,
  waitsec: number
}

function MyLink(props: LinkProps) {

  const linkstyles: {[key:string]:string } = {
    margin: '0 20px 0 20px',
    textAlign: 'center',
    opacity: '0%',
    animation: `fadein 1.5s ease ${props.waitsec}s 1 alternate forwards running`
  }

  return (
    <>
    <style>
      {`
      @keyframes fadein {
        0% {
          opacity: 0%;
        }
      
        100% {
          opacity: 100%;
        }
      }
      `}
    </style>
    <Link href={props.href} style={linkstyles}>
      <div className={styles.linkcircle}></div>
      <label className={styles.labelstyle}>{props.label}</label>
    </Link>
    </>
  )

}