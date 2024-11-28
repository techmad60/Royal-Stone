import { create } from "zustand";

interface ProductStore {
  products: []; // Replace `any` with the actual type of your product data
  fetchProducts: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  fetchProducts: async () => {
    set({ isLoading: true, error: null }); // Start loading
    try {
      const response = await fetch(
        "https://api-royal-stone.softwebdigital.com/api/products"
      );
      const data = await response.json();
      if (data.status) {
        set({ products: data.data.data });
      } else {
        set({ error: "Failed to fetch products." });
      }
    } catch (error: unknown) {
      // Safely handle unknown error
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred.";
      set({ error: errorMessage });
    } finally {
      set({ isLoading: false }); // Loading complete
    }
  },
}));


export default useProductStore;
