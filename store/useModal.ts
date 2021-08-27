import create from "zustand";

type IModal = {
  isOpen: boolean;
  type: null | "unavailable" | "added";
  toggleModal: (type: null | "unavailable" | "added") => void;
};

const useModal = create<IModal>((set) => ({
  isOpen: false,
  type: null,
  toggleModal: (type) => {
    set((state) => ({ isOpen: !state.isOpen, type }));
  },
}));

export default useModal;
