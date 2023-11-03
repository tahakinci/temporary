import { create } from 'zustand';
import { Data } from '../types/ApiResponseType';

interface UseStore {
  data: Data;
  fetch: (url: string) => Promise<void>;
}

const useStore = create<UseStore>((set) => ({
  data: {
    projects: [],
  },
  fetch: async (url: string) => {
    const response = await fetch(url);
    set({ data: await response.json() });
  },
}));

export default useStore;
