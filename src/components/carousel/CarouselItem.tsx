'use client'

import { ReactElement, useState } from "react";
import React from "react";
import styles from "./styles/CarsouselItem.module.scss";

type CarouselItemProps = {
    name:string;
    render: (props:any) => ReactElement;
    propslist ?: {
        [key:string] : any;
    };
    link:string;
}


export const CarouselItem = (props: CarouselItemProps) => {

    const { name, propslist = {sample: "none"} } = props

    return (
        <div className={styles.itemcontainer}>
            <div className={styles.container}>
                <div className={styles.items}>
                    <h2>{name}</h2>
                    <div className={styles.comp}>
                        {props.render(propslist)}
                    </div>
                    <div className={styles.srccontainer}>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}