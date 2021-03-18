<template>
  <div class="md:h-screen font-sans border border-gray login bg-cover">
    <div
      class="container mx-auto h-full flex flex-1 justify-center items-center"
    >
      <div class="w-100 md:w-full max-w-lg">
        <div class="leading-loose">
          <form
            class="flex flex-col m-4 p-10 bg-white opacity-90 rounded shadow-xl"
          >
            <p
              class="text-black font-medium text-center text-lg font-bold md:my-4"
            >
              LOGIN
            </p>
            <div class="">
              <label class="block text-sm text-red-400" for="email"
                >E-Mail</label
              >
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:bg-white"
                type="email"
                id="email"
                placeholder="E-Mail"
                aria-label="email"
                required
              />
            </div>
            <div class="mt-2">
              <label class="block text-sm text-red-400">Password</label>
              <input
                class="w-full px-5 py-1 text-gray-700 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:bg-white"
                type="password"
                id="password"
                placeholder="Password"
                arial-label="password"
                required
              />
            </div>

            <div class="mt-2 items-center flex justify-between">
              <Button type="submit" text="Login" />
              <router-link to="/contactform">
                <a
                  class="inline-block right-0 align-baseline font-bold text-sm text-500 text-blue-500 hover:text-red-400"
                  href="#"
                  >Forgot Password ?</a
                >
              </router-link>
            </div>
            <div class="text-center">
              <router-link to="/contactform">
                <a
                  class="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400"
                >
                  Send new password!
                </a>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "LogIn",
  components: {
    Button,
  },
};
</script>

<style >
.login {
  background: url("https://i.pinimg.com/originals/db/48/f3/db48f39d650c740472704c39fc7da1ec.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>