import { useStore, Store } from "vuex";

import { GlobalState } from "@/store";

export default function useCommonStore(): Store<GlobalState> {
  const store = useStore<GlobalState>();
  return store;
}
