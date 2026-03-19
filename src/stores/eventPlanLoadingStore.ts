import { create } from "zustand";

interface EventPlanLoadingStore {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useEventPlanLoadingStore = create<EventPlanLoadingStore>(
  (set) => ({
    isLoading: false,
    setLoading: (loading: boolean) => set({ isLoading: loading }),
  }),
);
