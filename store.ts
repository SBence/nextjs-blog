import { atomWithStorage } from "jotai/utils";

export const darkModeAtom = atomWithStorage("darkMode", false, undefined, {
  getOnInit: true,
});
