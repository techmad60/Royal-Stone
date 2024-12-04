import {create} from 'zustand';

// Investment interface with ROI instead of paymentMethod
interface Investment {
  productId: string;
  amount: string;
  noOfUnits: string;
  ROI: string;  // Include ROI instead of paymentMethod
  date: string;
}

interface InvestmentStore {
  investments: Investment[];
  addInvestment: (investment: Investment) => void;
}

const useInvestmentStore = create<InvestmentStore>((set) => ({
  investments: [],
  addInvestment: (investment: Investment) =>
    set((state: InvestmentStore) => ({
      investments: [...state.investments, investment],  // Adding investment to the store
    })),
}));

export default useInvestmentStore;
