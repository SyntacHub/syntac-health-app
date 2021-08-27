import create from "zustand";

type IUseAuth = {
  isSignIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

const useAuth = create<IUseAuth>((set) => ({
  isSignIn: false,
  signIn: () => {
    set({ isSignIn: true });
  },
  signOut: () => {
    set({ isSignIn: false });
  },
}));

export default useAuth;
