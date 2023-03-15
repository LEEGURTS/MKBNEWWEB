import { create } from "zustand";

export interface musicForm {
  title: string;
  explain: string;
  thumbnail: string;
}

interface MusicListState {
  modernDanceList: musicForm[];
  koreaDanceList: musicForm[];
  balletList: musicForm[];
  setModernDanceList: (modernDanceList: musicForm[]) => void;
  setKoreaDanceList: (koreaDanceList: musicForm[]) => void;
  setBalletList: (balletList: musicForm[]) => void;
}

export const useMusicListStore = create<MusicListState>()((set) => ({
  modernDanceList: [{ title: "", explain: "", thumbnail: "" }],
  koreaDanceList: [{ title: "", explain: "", thumbnail: "" }],
  balletList: [{ title: "", explain: "", thumbnail: "" }],
  setModernDanceList: (bgState: musicForm[]) =>
    set(() => ({ modernDanceList: bgState })),
  setKoreaDanceList: (bgState: musicForm[]) =>
    set(() => ({ koreaDanceList: bgState })),
  setBalletList: (bgState: musicForm[]) => set(() => ({ balletList: bgState })),
}));
