import { create } from "zustand";

interface KycState {
  isBankInfoProvided: boolean;
  setIsBankInfoProvided: (status: boolean) => void;
  isValidIdProvided: boolean;
  setIsValidIdProvided: (status: boolean) => void;
  isNextOfKinProvided: boolean;
  setIsNextOfKinProvided: (status: boolean) => void;
  isProfilePictureProvided: boolean;
  setIsProfilePictureProvided: (status: boolean) => void;
  isKycModalOpen: boolean;
  setIsKycModalOpen: (status: boolean) => void;
  isAddBankInfoModalOpen: boolean;
  setIsAddBankInfoModalOpen: (status: boolean) => void;
  isValidIdModalOpen: boolean;
  setIsValidIdModalOpen: (status: boolean) => void;
  isNextOfKinModalOpen: boolean;
  setIsNextOfKinModalOpen: (status: boolean) => void;
  isProfilePictureModalOpen: boolean;
  setIsProfilePictureModalOpen: (status: boolean) => void;
  isKycProvided: boolean; // Changed to a boolean property
  updateKycProvidedState: () => void; // Function to update `isKycProvided`

  userId: string | null;
  setUserId: (userId: string) => void;
}

export const useKycStore = create<KycState>((set, get) => ({
  isBankInfoProvided: false,
  setIsBankInfoProvided: (status) => set({ isBankInfoProvided: status }),

  isValidIdProvided: false,
  setIsValidIdProvided: (status) => {
    set({ isValidIdProvided: status });
    get().updateKycProvidedState(); // Trigger update
  },

  isNextOfKinProvided: false,
  setIsNextOfKinProvided: (status) => {
    set({ isNextOfKinProvided: status });
    get().updateKycProvidedState(); // Trigger update
  },

  isProfilePictureProvided: false,
  setIsProfilePictureProvided: (status) => {
    set({ isProfilePictureProvided: status });
    get().updateKycProvidedState(); // Trigger update
  },
  
  //Modals State
  isKycModalOpen: false,
  setIsKycModalOpen: (status) => set({ isKycModalOpen: status }),

  isAddBankInfoModalOpen: false,
  setIsAddBankInfoModalOpen: (status) => set({ isAddBankInfoModalOpen: status }),

  isValidIdModalOpen: false,
  setIsValidIdModalOpen: (status) => set({ isValidIdModalOpen: status }),

  isNextOfKinModalOpen: false,
  setIsNextOfKinModalOpen: (status) => set({ isNextOfKinModalOpen: status }),

  isProfilePictureModalOpen: false,
  setIsProfilePictureModalOpen: (status) => set({ isProfilePictureModalOpen: status }),

  // Computed state and updater
  isKycProvided: false,
  updateKycProvidedState: () => {
    const { isValidIdProvided, isNextOfKinProvided, isProfilePictureProvided } = get();
    const isKycProvided = isValidIdProvided && isNextOfKinProvided && isProfilePictureProvided;
    set({ isKycProvided });
  },
  userId: null as string | null, // Default value with type
  setUserId: (userId: string) => set({ userId }),
  // Sync KYC-related states with localStorage
  syncKycStatesWithLocalStorage: () => {
    const userId = get().userId;
    if (userId) {
      set({
        isValidIdProvided: localStorage.getItem(`isValidIdProvided-${userId}`) === "true",
        isNextOfKinProvided: localStorage.getItem(`isNextOfKinProvided-${userId}`) === "true",
        isProfilePictureProvided: localStorage.getItem(`isProfilePictureProvided-${userId}`) === "true",
      });
    }}
}));
