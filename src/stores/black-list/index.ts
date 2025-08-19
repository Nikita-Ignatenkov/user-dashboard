import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Не хватает префикса I в названии интерфайса
interface BlackListState {
  blackList: number[];
  addToBlackList: (id: number) => void;
  removeFromBlackList: (id: number) => void;
}

// Можешь ещё почитать про то, что такое persist и попробовать его здесь применить
export const useBlackListStore = create<BlackListState>()(
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
      name: 'black-list-storage', // Ключ для localStorage
    }
  )
);