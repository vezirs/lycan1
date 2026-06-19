import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  messages: [],
  mails: [],
  
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  addMessage: (msg) => set((state) => ({
    messages: [...state.messages, msg]
  })),
  addMail: (mail) => set((state) => ({
    mails: [...state.mails, mail]
  })),
  logout: () => set({ user: null, isLoggedIn: false }),
}));

export default useStore;
