<template>
  <div class="createCard q-mx-sm">
    <h1 class="createCard__heading no-padding">Create Card</h1>

    <q-form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-sm-5 col-xs-12 q-mt-md">
          <q-input
            label="First Name"
            type="text"
            v-model="firstName"
            class="createCard__formInput"
            outlined
            dense
          />
        </div>

        <div class="col-sm-2"></div>

        <div class="col-sm-5 col-xs-12 q-mt-md">
          <q-input
            label="Last Name"
            type="text"
            v-model="lastName"
            class="createCard__formInput float-right"
            outlined
            dense
          />
        </div>
      </div>

      <div class="row q-mt-md">
        <div class="col-12">
          <q-select
            label="Membership"
            v-model="memberShip"
            :options="options"
            dense
            outlined
            options-dense
          />
        </div>
      </div>

      <div class="row q-mt-md">
        <div class="col-12">
          <q-input
            label="Description"
            type="textarea"
            v-model="description"
            outlined
            dense
          />
        </div>
      </div>

      <div class="row flex justify-center q-mt-md">
        <q-btn
          label="Submit"
          type="submit"
          color="primary"
          class="createCard__btn"
          :loading="loading"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const $store = useStore();
    const $router = useRouter();

    const options = ["Gold", "Silver", "Plantinium"];

    const firstName = ref("");
    const lastName = ref("");
    const memberShip = ref("");
    const description = ref("");
    const loading = ref(false);

    const handleSubmit = () => {
      // e.preventDefault();

      if (
        firstName.value.trim() !== "" &&
        lastName.value.trim() &&
        memberShip.value.trim() &&
        description.value.trim()
      ) {
        loading.value = true;
        new Promise((resolve) => {
          const data = {
            first_name: firstName.value,
            last_name: lastName.value,
            membership_tier: memberShip.value,
            description: description.value,
            card_number: "4444-1000-2000-3000" + (Math.random() * 99 + 1),
          };
          setTimeout(() => {
            resolve(data);
          }, 2000);
        }).then((data) => {
          loading.value = false;

          $store.commit("addCard", data);
          $router.push("/");
        });
      } else {
        alert("Please fill up the form");
      }
    };

    return {
      firstName,
      lastName,
      memberShip,
      description,
      options,
      loading,

      handleSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.createCard {
  &__heading {
    font-size: 22px;
  }

  &__formInput {
    /* max-width: 4px; */
    width: 100%;
    /* margin: 0px 10px */
  }

  &__btn {
    max-width: 300px;
    width: 100%;
  }
}
</style>
