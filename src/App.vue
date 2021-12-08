<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title @click="$router.push('/')" style="cursor:pointer" > Vue Test </q-toolbar-title>

        <q-space />

        <q-btn label="add new card" to="/createCard" flat />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div class="container" v-if="dataFetched">
        <router-view></router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

import { fetchCards } from "./service";

export default {
  name: "LayoutDefault",

  components: {},

  setup() {
    const $store = useStore();
    const dataFetched = ref(false);
    onMounted(async () => {
      const res = await fetchCards();
      dataFetched.value = true;
      $store.commit("setCards", res);
    });

    return {dataFetched};
  },
};
</script>

<style lang="scss">
.container {
  max-width: 780px;
  margin: 0px auto;
}
</style>
