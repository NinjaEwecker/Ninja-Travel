<template>
  <header class="bg-white flex items-center flex-wrap">
    <div class="inline-flex items-center" id="nav">
      <span>
        <router-link to="/">
          <img
            class="object-left inline-flex mx-8 w-20 h-18"
            alt="logo"
            :src="
              require('/Users/ninjameyer/Desktop/HamburgerCodingSchool/Vue-Travelblog/public/Logo.png')
            "
          />
        </router-link>
        <router-link
          class="text-lg md:text-2xl text-gray-700 tracking-wide"
          to="/"
        >
          {{ title }}
        </router-link>
      </span>
    </div>

    <div
      class="hidden md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto mx-6"
      id="nav"
    >
      <span>
        <div class="inline-flex">
          <router-link
            class="text-lg md:text-2xl text-gray-700 tracking-wide mr-12"
            to="/contact"
            >Contact
          </router-link>
          <router-link to="/new">
            <Button text="New Post" />
          </router-link>

          <router-link to="/login">
            <Button text="Login" />
          </router-link>
        </div>
      </span>
    </div>

    <Nav />
  </header>
</template>

<script>
import Nav from "./MobileNav.vue";
import Button from "./Button.vue";

export default {
  name: "Header",

  props: {
    title: String,
  },

  components: {
    Button,
    Nav,
  },
};
</script>


