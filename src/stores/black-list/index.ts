import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IBlackListState {
  blackList: number[];
  addToBlackList: (id: number) => void;
  removeFromBlackList: (id: number) => void;
}

export const useBlackListStore = create<IBlackListState>()(
  persist(
    (set) => ({
      blackList: [],
      addToBlackList: (id) =>
        set((state) => ({ blackList: [...state.blackList, id] })),
      removeFromBlackList: (id) =>
        set((state) => ({
          blackList: state.blackList.filter((item) => item !== id),
        })),
    }),
    {
      name: 'black-list-storage',
    }
  )
);