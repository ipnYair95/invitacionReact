import { useEffect, useState } from "react"


export const useScrolling = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);

        window.removeEventListener('scroll', onScroll);
        
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return {
        scrollY
    }
}
