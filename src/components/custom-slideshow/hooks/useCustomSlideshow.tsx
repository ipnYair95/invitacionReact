import { useEffect, useRef, useState } from 'react'

export const useCustomSlideshow = (elements: any[], delay = 2500, ) => {

    const [index, setIndex] = useState(0);

    const timeoutRef = useRef<any>(null);

    useEffect(() => {

        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => prevIndex === elements.length - 1 ? 0 : prevIndex + 1);
        }, delay);

        return () => {
            resetTimeout();
        }

    }, [index])

    const resetTimeout = () => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const onDot = (index: number) => {
        setIndex(index);
    }

    const onNext = () => {
        setIndex((prevIndex) => prevIndex === elements.length - 1 ? 0 : prevIndex + 1);
    }

    const onPrev = () => {
        setIndex((prevIndex) => prevIndex === 0 ? elements.length - 1 : prevIndex - 1);
    }


    return {
        index,
        onDot,
        onNext,
        onPrev
    }
}
