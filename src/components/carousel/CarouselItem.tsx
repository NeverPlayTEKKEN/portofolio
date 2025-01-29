'use client'

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab } from "../tab/Tab";
import { ReactElement, useState } from "react";
import React from "react";
import ReactDOMServer from 'react-dom/server';
import styles from "./styles/CarsouselItem.module.scss";

type CarouselItemProps = {
    name:string;
    render: (props:any) => ReactElement;
    propslist ?: {
        [key:string] : any;
    };
    isJSX ?: boolean;
    srccode: string;
}


export const CarouselItem = (props: CarouselItemProps) => {

    const { name, propslist = {sample: "none"}, srccode } = props

    return (
        <div className={styles.itemcontainer}>
            <div className={styles.container}>
                <div className={styles.items}>
                    <h2>{name}</h2>
                    <div className={styles.comp}>
                        {props.render(propslist)}
                    </div>
                    <div className={styles.srccontainer}>
                        <Tab
                            labels={["props", "src"]}
                            contents={[
                                <SafeTable propslist={propslist}/>,
                                <div className={styles.src}>
                                    <p>github link</p>
                                    <SyntaxHighlighter language="typescript" style={docco} customStyle={{fontSize: "0.8rem"}}>{srccode}</SyntaxHighlighter>
                                </div>
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

type SafeTableProps = {
    propslist : {
        [key:string] : any;
    };
}

const SafeTable: React.FC<SafeTableProps> = (props) => {

    const propslist = { ...props.propslist};
    const key_list = Object.keys(propslist);

    key_list.map((key)=>{
        if(React.isValidElement(propslist[key])) {
            propslist[key] = ReactDOMServer.renderToString(propslist[key])
        }else if(Array.isArray(propslist[key])){
            propslist[key] = propslist[key].join(",");
        }
    })

    return (
        <table>
            <thead><tr><th>name</th><th>data</th></tr></thead>
            <tbody>
                {propslist && Object.keys(propslist).map((key, index)=>
                    <tr key={index}>
                        <td>{key}</td>
                        <td style={{ whiteSpace: 'pre-wrap' }}>{
                            propslist[key]
                        }</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}