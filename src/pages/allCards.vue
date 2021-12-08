<template>
  <div class="allCards">
    <h5>All Cards</h5>

    <div class="row">
      <div
        class="col-sm-6 col-xs-12"
        v-for="card in allCards"
        :key="card.first_name + card.card_number"
      >
        <card-comp :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import cardComp from "../components/cardComp.vue";
export default {
  components: { cardComp },
  name: "allCards",
  setup() {
    const $store = useStore();

    const allCards = computed(() => {
      return $store.getters.getAllCards;
    });

    return {
      allCards,
    };
  },
};
</script>

<style lang="scss"></style>
