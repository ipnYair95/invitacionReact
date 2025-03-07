import { create } from 'zustand';

export interface IDataStore {
    playing: boolean;
    enableStars: boolean;

    setPlaying: () => void;
    setEnableStars: (isEnable: boolean) => void;
}

export const useDataStore = create<IDataStore>((set) => ({
    playing: false,
    enableStars: false,

    setPlaying: () => set((state) => ({
        playing: !state.playing
    })),
    setEnableStars: (isEnable: boolean) => set({
        enableStars: isEnable
    })
}));
