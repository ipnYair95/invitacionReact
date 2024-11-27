import { create } from 'zustand'

interface IDataStore {
    playing: boolean,
    setPlaying: () => void
}

export const useDataStore = create<IDataStore>((set) => ({

    playing: false,

    setPlaying: () => set((state: any) => ({ playing: !state.playing }))

}))