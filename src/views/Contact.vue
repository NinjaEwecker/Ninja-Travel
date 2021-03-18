<template>
  <div class="Contact bg-gradient-to-r from-gray-50 to-gray-300">
    <div class="flex justify-start md:mx-6 w-20">
      <router-link to="/">
        <i
          class="fa fa-arrow-left mt-16 p-4 md:bg-white rounded md:border border-gray-400"
        ></i>
      </router-link>
    </div>

    <ContactDetails />
  </div>
</template>

<script>
import ContactDetails from "../components/ContactDetails.vue";

export default {
  name: "Contact",
  components: {
    ContactDetails,
  },
};
</script>