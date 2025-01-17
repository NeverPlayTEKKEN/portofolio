import { Header } from "@/components/header/Header";
import { CarouselItem } from "@/components/carousel/CarouselItem";
import { Hamburger } from "@/components/header/Hamburger";

export default function Home() {

  const HumbergerPropsChildren = (
    <ul>
      <li>Hello</li>
      <li>New</li>
      <li>World!</li>
    </ul>
  )

  return (
    <div>
      <Header tittle="Naoki's Portofolio"/>
      <CarouselItem render={Hamburger} propslist={{children: HumbergerPropsChildren}} isJSX={true} srccode={Hamburgersrc}/>
    </div>
  );
}

const Hamburgersrc = `
'use client'

import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { JSX } from "react/jsx-dev-runtime";


export const Hamburger = (props: {children: JSX.Element}) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    type onClickAwayType = (event: Event) => void

    const onClickAway: onClickAwayType = (event: Event) => {
        // ここの型アサーションがなんか怖いから変えたいが良い方法がない
        ref.current && !ref.current.contains(event.target as Node) && setIsMenuVisible(false)
    };
    
    useEffect(()=>{
        document.addEventListener("mousedown", onClickAway);
        document.addEventListener("touchstart", onClickAway);

        return (()=>{
            document.removeEventListener("mousedown", onClickAway);
            document.removeEventListener("touchstart", onClickAway);
        })
    },[]);

    return (
        <div ref={ref}>
            <div onClick={()=>{setIsMenuVisible(!isMenuVisible)}}>{isMenuVisible ? (<XMarkIcon className="w-5 h-5" />):(<Bars3Icon className="w-5 h-5"/>)}</div>
            {isMenuVisible ? (props.children):(<></>)}
        </div>
    )
}



`