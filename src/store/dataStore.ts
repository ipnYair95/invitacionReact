import { create } from 'zustand';

export interface IDataStore {
    playing: boolean;
    setPlaying: () => void;
}

export const useDataStore = create<IDataStore>((set) => ({
    playing: false,
    setPlaying: () => set((state) => ({ playing: !state.playing })),
}));
