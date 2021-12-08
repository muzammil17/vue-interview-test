<template>
  <div>
    <q-card>
      <q-card-section class="card-section">
        <h5>{{ cardInfo.first_name }} {{ cardInfo.last_name }}</h5>
      </q-card-section>

      <q-card-section class="card-section">
        <div class="text-bold">
          {{ cardInfo.card_number }}
        </div>
      </q-card-section>

      <q-card-section class="card-section" v-if="cardInfo.description">
        {{ cardInfo.description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const $route = useRoute();
    const $router = useRouter();
    const $store = useStore();
    console.log({ ...$route });
    const key = $route.params.card;

    let cardInfo = $store.getters.getCard(key);
    cardInfo = [...cardInfo][0]
    if (!cardInfo) {
      $router.push("/");
    }
    console.log(cardInfo);
    return {
      cardInfo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
