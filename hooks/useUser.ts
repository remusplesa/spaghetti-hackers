import create from 'zustand';

export const useUser = create<{ user: any, setUser: (userData: any) => void }>(set => ({
  user: {},
  setUser: (userData: any) => set({ user: userData }),
}))
