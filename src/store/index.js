import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      cards: [],
    };
  },

  mutations: {
    setCards(state, payload) {
      state.cards = payload;
    },

    addCard(state, payload) {
      state.cards = [...state.cards, payload];
    },
  },

  getters: {
    getAllCards(state) {
      return state.cards;
    },

    getCard(state) {
      return (key) => {
        const card = [...state.cards.filter((c) => c.card_number === key)]
        console.log(card)
        return card
      };
    },
  },
});

export default store;
