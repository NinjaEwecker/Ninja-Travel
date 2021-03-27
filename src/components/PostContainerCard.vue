<template>
  <div class="flex flex-row flex-wrap">
    <div
      class="mx-auto overflow-hidden transition duration-400 ease-out transform bg-white rounded shadow-md hover:shadow-lg hover:scale-105 w-60 m-4"
      :key="carddetail.id"
      v-for="carddetail in carddetails"
    >
      <CardDetails :carddetail="carddetail"
      />
    </div>
  </div>
</template>

<script>
import CardDetails from "./CardDetails.vue";

export default {
  name: "PostContainerCard",

  components: {
    CardDetails,
  },

  props: {
    carddetails: Array,
  },
  methods: {
    cardSelected(id) {
      console.log("Card was clicked", id);
      this.$emit("clickedCard", id);
    },
  },
};
</script>