<template>
  <div class="DetailPage">
    <div class="flex justify-start mx-6">
      <router-link to="/">
        <i
          class="fa fa-arrow-left md:bg-white p-4 mt-10 absolute rounded md:border border-gray-400"
        ></i>
      </router-link>
    </div>
    <PostDetails :card="card" />
  </div>
</template>

<script>
import PostDetails from "../components/PostDetails.vue";

export default {
  name: "DetailPage",

  components: {
    PostDetails,
  },

  props: {
    carddetails: Array,
    id: String,
  },

  data() {
    return {
      selectedCard: [],
    };
  },

  methods: {
    cardSelected(id) {
      console.log("Card was clicked", id);
      this.$emit("clickedCard", id);
    },
  },

  computed: {
    card() {
      return this.carddetails.find((item) => item.id == this.id);
    },
  },
};
</script>

