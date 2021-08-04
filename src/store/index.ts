import { createStore } from "vuex";

export interface GlobalState {
  clickedLetter: string;
}

export default createStore<GlobalState>({
  state: {
    clickedLetter: "",
  },
  mutations: {
    changeLetter(state, letter) {
      state.clickedLetter = letter;
    },
  },
  actions: {},
  modules: {},
});
