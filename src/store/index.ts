import { createStore } from "vuex";

export interface GlobalState {
  clickedLetter: string;
  city: string;
}

export default createStore<GlobalState>({
  state: {
    clickedLetter: "",
    city: "北京",
  },
  mutations: {
    changeLetter(state, letter) {
      state.clickedLetter = letter;
    },
    changeCity(state, city) {
      state.city = city;
    },
  },
  actions: {},
  modules: {},
});
