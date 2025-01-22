'use client'

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab } from "../tab/Tab";
import { ReactElement } from "react";
import ReactDOMServer from 'react-dom/server';
import styles from "./styles/CarsouselItem.module.scss";
import { stringify } from "querystring";

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

    const { name, propslist, isJSX=false, srccode } = props

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
                                <table>
                                    <thead><tr><th>name</th><th>data</th></tr></thead>
                                    <tbody>
                                    {propslist && Object.keys(propslist).map((key, index)=>
                                        <tr key={index}>
                                            <td>{key}</td>
                                            <td style={{ whiteSpace: 'pre-wrap' }}>{
                                                isJSX ? ReactDOMServer.renderToStaticMarkup(propslist[key]) : propslist[key]
                                            }</td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>,
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