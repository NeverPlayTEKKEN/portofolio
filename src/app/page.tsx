import Link from "next/link";
import Image from "next/image";
import React from "react";
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
        <MyLink label="Play TypeScript" href="/with-ts" waitsec={2}/>
      </div>
      <div className={styles.ankercontainer}>
        <a href="" className={styles.anker}><img src="/github-mark.svg" alt=""/></a>
        <a href="" className={styles.anker}><img src="/x_logo_2023.svg" alt=""/></a>
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

  const Props = {...props}

  const linkstyles: {[key:string]:string } = {
    width: '15%',
    margin: '0 20px 0 20px',
    textAlign: 'center',
    opacity: '0%',
    animation: `fadein 1.5s ease ${Props.waitsec}s 1 alternate forwards running`
  }

  const vibsec = Props.waitsec + 3

  const circlestyles: {[key:string]:string } = {
    width: '100%',
    aspectRatio: '1/1',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #4b5563, #9ca3af)',
    animation: `vib 3s ease ${vibsec}s infinite normal none running`
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

      @keyframes vib {
        0% {
          transform: translateX(-3px);
        }
      
        10% {
          transform: translateX(0);
        }
      
        20% {
          transform: translateX(3px);
        }
      
        30% {
          transform: translateX(0);
        }
      
      }
      `}
    </style>
    <Link href={Props.href} style={linkstyles}>
      <div style={circlestyles}></div>
      <label className={styles.labelstyle}>{props.label}</label>
    </Link>
    </>
  )

}