<template>
  <PostContainerCard :carddetails="carddetails" class="mt-8" />
</template>

<script>
import PostContainerCard from "./PostContainerCard.vue";

export default {
  name: "AllBlogPosts",
  components: {
    PostContainerCard,
  },

  props: {
    carddetails: Array,
  },
};
</script>