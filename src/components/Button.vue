<template>
  <button
    @click="onClick()"
    class="bg-red-500 inline-block rounded text-white mr-6 px-4 py-2 hover:bg-gray-800"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },

  methods: {
    onClick() {
      console.log("You clicked the button");
    },
  },
};
</script>