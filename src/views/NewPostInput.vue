<template>
  <div
    class="flex items-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-300"
  >
    <div class="container mx-auto">
      <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
        <div class="text-center">
          <h1
            class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
          >
            New Post
          </h1>
          <p class="text-gray-400 dark:text-gray-400">
            Fill up the form below to add a new post
          </p>
        </div>
        <div class="m-7">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
          >
            <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="checkbox"
              name="botcheck"
              id=""
              style="display: none"
            />

            <div class="mb-6">
              <label
                for="Country"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Country</label
              >
              <input
                type="text"
                name="Country"
                id="Country"
                placeholder="Country"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="City"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >City</label
              >
              <input
                type="City"
                name="City"
                id="City"
                placeholder="City"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div class="mb-6">
              <label
                for="Region"
                class="text-sm text-gray-600 dark:text-gray-400"
                >Region</label
              >
              <input
                type="text"
                name="Region"
                id="Region"
                placeholder="Region"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>

            <div class="mb-6">
              <label
                for="Visitdate"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Visitdate</label
              >
              <input
                type="text"
                name="Visitdate"
                id="Visitdate"
                placeholder="Date"
                required
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>

            <div class="mb-6">
              <label
                for="info"
                class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >Text about this city
              </label>

              <textarea
                rows="5"
                name="info"
                id="info"
                placeholder="Your Text"
                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                required
              ></textarea>
            </div>
            <router-link to="/error">
              <div class="mb-6">
                <button
                  type="submit"
                  class="bg-red-500 inline-block rounded text-white mr-6 px-4 py-2 hover:bg-gray-800"
                >
                  Add Post
                </button>
              </div>
            </router-link>
            <p class="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPostInput",
};
</script>