import { createStore } from "stan-js";
import { storage } from "stan-js/storage";

import { Accents } from "@/unistyles";

export const { useStore } = createStore({
  preferredAccent: storage<Accents>("banana"),
});
