<template>
  <div
    class="flex flex-col md:grid grid-cols-2 border bg-gradient-to-r from-gray-50 to-gray-400"
  >
    <span>
      <AllBlogPosts />
      <PostContainerCard :carddetails="sortCards(carddetails)" />
    </span>
    <span>
      <GoogleMaps :carddetails="carddetails" />
    </span>
  </div>
</template>

<script>
import AllBlogPosts from "@/components/AllBlogPosts.vue";
import GoogleMaps from "@/components/GoogleMaps.vue";
import PostContainerCard from "@/components/PostContainerCard.vue";

export default {
  name: "Home",
  components: {
    AllBlogPosts,
    GoogleMaps,
    PostContainerCard,
  },

  props: {
    carddetails: Array,
  },

  methods: {
    sortCards() {
      return [...this.carddetails].sort((a, b) => a.visitDate - b.visitDate);
    },
  },
};
</script>
