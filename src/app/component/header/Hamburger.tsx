'use client'

import { useState, useEffect, useRef } from "react";
import styles from "./styles/Hamburger.module.scss";

export const Hamburger = () => {

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
            <div onClick={()=>{setIsMenuVisible(!isMenuVisible)}}>{isMenuVisible ? ("×"):("a")}</div>
            {isMenuVisible ? (<NavItems />):(<></>)}
        </div>
    )
}


const NavItems = () => {

    return (
        <nav className={styles.navItems}>Hello world!</nav>
    )
}