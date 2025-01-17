'use client'

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tab } from "../tab/Tab";
import { ReactElement } from "react";
import ReactDOMServer from 'react-dom/server';

type CarouselItemProps = {
    render: (props:any) => ReactElement;
    propslist ?: {
        [key:string] : any;
    };
    isJSX ?: boolean;
    srccode: string;
}


export const CarouselItem = (props: CarouselItemProps) => {

    const { propslist, isJSX=false, srccode } = props

    return (
        <div>
            <div>
                {props.render(propslist)}
            </div>
            <div>
                <Tab
                    labels={["props", "src"]}
                    contents={[
                        <table>
                            <tr><th>name</th><th>data</th></tr>
                            {propslist && Object.keys(propslist).map((key, index)=>
                                <tr>
                                    <td>{key}</td>
                                    <td style={{ whiteSpace: 'pre-wrap' }}>{
                                        isJSX && ReactDOMServer.renderToStaticMarkup(propslist[key])
                                    }</td>
                                </tr>
                            )}
                            
                        </table>,
                        <SyntaxHighlighter language="typescript" style={docco} customStyle={{fontSize: "12px"}}>{srccode}</SyntaxHighlighter>
                    ]} />
            </div>
        </div>
    )
}