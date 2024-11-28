import { useEffect } from "react";
import { useDataStore } from "../store";


export const usePlay = () => {

    const playing = useDataStore((state) => state.playing);

    useEffect(() => {

        updatePlay();

    }, [playing])


    const updatePlay = () => {

        if (playing) {
            onPlay();
            return;
        }

        onPause();

    }

    const onPlay = () => {

        const audioElement: any = document.getElementById('vid')!;
        audioElement.volume = 0.5;
        audioElement.loop = true;
        audioElement.play();

    }

    const onPause = () => {
        const audioElement: any = document.getElementById('vid')!;
        audioElement.pause();
    }

    return {

    }

}
