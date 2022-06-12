import create from 'zustand';

export const useUser = create<{ user: any, setUser: (userData: any) => void }>(set => ({
  user: {},
  setUser: (userData: any) => {
    console.log('Setting the user to:', userData);
    return set({ user: userData })
  },
}))
