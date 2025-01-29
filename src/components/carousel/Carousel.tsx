'use client'

import { CarouselItem } from "./CarouselItem"
import { Hamburger } from "../header/Hamburger"
import { Tab } from "../tab/Tab"
import styles from "./styles/Carousel.module.scss";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/16/solid";

export const Carousel = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel( { loop:true} )

    const handleNext = () => {
        if (!emblaApi || !emblaApi.canScrollNext()) return;
        emblaApi.scrollNext();
    }
    
    const handlePrev = () => {
    if (!emblaApi || !emblaApi.canScrollPrev()) return;
    emblaApi.scrollPrev();
    }

    return (
        <div className={styles.container}>
            <button onClick={handlePrev}><ChevronDoubleLeftIcon className="w-6 h-6"/></button>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.embla__container}>
                    <div className={styles.embla__slide}>
                        <CarouselItem name="ハンバーガーメニュー" render={Hamburger} propslist={{children: HumbergerPropsChildren}}  srccode={Hamburgersrc}/>
                    </div>
                    <div className={styles.embla__slide}>
                        <CarouselItem name="タブ" render={Tab} propslist={{labels:["hello", "world"], contents:["こんにちは", "せかい"]}} srccode={Tabsrc} />
                    </div>
                </div> 
            </div>
            <button onClick={handleNext}><ChevronDoubleRightIcon className="w-6 h-6" /></button>
        </div>
    )
}

const HumbergerPropsChildren = (
    <ul>
      <li>Hello</li>
      <li>New</li>
      <li>World!</li>
    </ul>
  )

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

const Tabsrc = `
'use client'
import { ReactNode, useState } from "react";
import styles from "./styles/tab.module.scss";

type TabProps = {
    labels: string[];
    contents: ReactNode[];
}

export const Tab = (props: TabProps) => {
    const [viewIndex, setViewIndex ] = useState<number>(1);
    
    return (
        <div>
            <div>
                {props.labels.map((label, index)=>
                    <button
                        key={index}
                        onClick={() => {setViewIndex(index + 1)}}
                        className={viewIndex===index+1 ? styles.activeButton : styles.button }
                    >{label}</button>
                )}
            </div>
            <div className={styles.content}>
                {props.contents[viewIndex - 1]}
            </div>
        </div>
    )
}
`