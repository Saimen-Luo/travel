import { createStore } from "vuex";

export interface GlobalState {
  clickedLetter: string;
  city: string;
}

let city = "北京";
try {
  if (localStorage.city) {
    city = localStorage.city;
  }
} catch (error) {
  console.log(error);
}

export default createStore<GlobalState>({
  state: {
    clickedLetter: "",
    city,
  },
  mutations: {
    changeLetter(state, letter) {
      state.clickedLetter = letter;
    },
    changeCity(state, city) {
      state.city = city;
      try {
        localStorage.city = city;
      } catch (error) {
        console.log(error);
      }
    },
  },
  actions: {},
  modules: {},
});
