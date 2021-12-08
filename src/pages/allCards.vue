<template>
  <div class="allCards">
    <h5>All Cards</h5>

    <div class="row">
      <div
        class="col-sm-6 col-xs-12"
        v-for="card in allCards"
        :key="card.first_name + card.card_number"
      >
        <q-card
          class="myCard q-ma-sm bg-grey-1"
          style="cursor: pointer"
          @click="navigate(card.card_number)"
        >
          <q-card-section class="card-section">
            <h5>{{ card.first_name }} {{ card.last_name }}</h5>
          </q-card-section>

          <q-card-section class="card-section">
            <div class="text-bold">
              {{ card.card_number }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "allCards",
  setup() {
    const $store = useStore();
    const $router = useRouter();

    const allCards = computed(() => {
      return $store.getters.getAllCards;
    });

    const navigate = (key) => {
      console.log(key);
      $router.push({ name: "userCard", params: { card: key } });
    };

    return {
      allCards,
      navigate,
    };
  },
};
</script>

<style lang="scss"></style>
