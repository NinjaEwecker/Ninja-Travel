<template>
  <div class="sm:inline-flex w-screen md:flex md:hidden">
    <!-- container -->

    <div
      class="absolute top-1 right-10 float-right"
      @click="showTopMenu = !showTopMenu"
    >
      <div class="relative py-3 sm:max-w-xl mx-auto">
        <nav x-data="{ open: false }">
          <button
            class="text-gray-500 w-12 h-12 relative border border-gray-400 rounded focus:outline-none bg-white"
            @click="open = !open"
          >
            <span class="sr-only">Open main menu</span>
            <div
              class="block w-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span
                aria-hidden="true"
                class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
                :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
              ></span>
              <span
                aria-hidden="true"
                class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
                :class="{ 'opacity-0': open }"
              ></span>
              <span
                aria-hidden="true"
                class="block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out"
                :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
              ></span>
            </div>
          </button>
        </nav>
      </div>
    </div>

    <header
      class="my-auto w-full border border-gray bg-white text-gray-700 shadow"
      v-if="showTopMenu"
    >
      <ul>
        <!-- Items Section -->
        <router-link to="/contact">
          <li
            class="flex justify-end border border-gray items-center hover:bg-gray-100 hover:underline font-bold"
          >
            <a
              href="."
              class="h-16 px-6 flex justify-start items-center w-full focus:text-orange-500"
            >
              <svg
                class="h-5 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="244"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                <path
                  d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
						2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
						0-1.79 1.11z"
                ></path>
              </svg>
              <p class="ml-4">Contact</p>
            </a>
          </li>
        </router-link>

        <router-link to="/new">
          <li
            class="hover:bg-gray-100 flex border border-gray justify-start items-center hover:underline font-bold"
          >
            <a
              href="."
              class="h-16 px-6 flex justify-start items-center w-full focus:text-orange-500"
            >
              <svg
                class="h-5 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                ></path>
              </svg>
              <p class="ml-4">New Post</p>
            </a>
          </li>
        </router-link>
      </ul>

      <router-link to="/login">
        <div class="mt-auto h-16 flex items-center w-full">
          <!-- Action Section -->
          <button
            class="h-16 flex font-bold border border-gray justify-start items-center w-full focus:text-orange-500 hover:bg-green-200 focus:outline-none"
          >
            <p class="ml-8">Login</p>
            <svg
              class="h-4 w-8 text-green-700"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "Nav",

  data() {
    return {
      showTopMenu: false,
      open: false,
    };
  },
};
</script>

