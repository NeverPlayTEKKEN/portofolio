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