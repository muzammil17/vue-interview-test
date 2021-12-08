<template>
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
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    card: Object,
  },
  setup() {
    const $router = useRouter();
    const navigate = (key) => {
      $router.push({ name: "userCard", params: { card: key } });
    };
    return { navigate };
  },
};
</script>

<style lang="scss" scoped></style>
