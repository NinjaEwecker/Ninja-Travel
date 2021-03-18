<template>
  <router-link :to="{ name: 'DetailPage', params: { id: carddetail.id } }">
    <div @click="cardSelected(carddetail.id)">
      <img
        class="w-full h-36 mx-auto object-cover"
        :src="carddetail.img"
        :alt="carddetail.country"
      />
      <p class="text-right mr-2 mt-4 text-xs">{{ carddetail.visitDate }}</p>

      <div class="text-left mt-4 ml-4 flex flex-col">
        <h5 class="text-2xl font-bold">{{ carddetail.country }}</h5>
        <p class="my-auto text-base">{{ carddetail.city }}</p>
      </div>

      <hr class="mt-8 -mb-6" />
      <div class="inline-flex text-xs -ml-16 mt-10 mb-4">
        <img
          class="w-10 h-10 mr-6 rounded-full"
          :src="carddetail.authorimg"
          :alt="carddetail.authorname"
        />
        <p class="my-auto">{{ carddetail.authorname }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardDetails",

  props: {
    carddetail: Object,
  },

  methods: {
    cardSelected(id) {
      console.log("Card was clicked", id);
    },
  },
};
</script>