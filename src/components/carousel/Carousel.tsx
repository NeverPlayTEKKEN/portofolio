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
                        <CarouselItem
                            name="ハンバーガーメニュー" 
                            render={Hamburger}
                            propslist={{children: HumbergerPropsChildren}}
                            link="https://github.com/NeverPlayTEKKEN/portofolio/blob/main/src/components/header/Hamburger.tsx"/>
                    </div>
                    <div className={styles.embla__slide}>
                        <CarouselItem
                            name="タブ"
                            render={Tab}
                            propslist={{labels:["hello", "world"], contents:["こんにちは", "せかい"]}}
                            link="https://github.com/NeverPlayTEKKEN/portofolio/blob/main/src/components/tab/Tab.tsx"/>
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