<template>
  <div class="mx-auto -mt-12 max-w-sm sm:max-w-md md:max-w-lg">
    <div
      class="bg-white max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded overflow-hidden shadow-none mb-10 sm:rounded-lg max-w-2xl border border-gray-300"
    >
      <div class="sm:h-34 md:bg-white md:mt-4 w-full md:h-24">
        <p class="mt-4 text-lg">Hello World!</p>
        <p class="my-4 mx-10 md:mx-16 mt-2 text-xs">
          This is my travel diary - “Ninja Travel”. It shows my most meaningful
          travels and stays on our planet and is meant to document where I left
          my mark on the world. My
          <img
            class="inline-flex w-4 h-4"
            alt="logo"
            src="https://icon2.cleanpng.com/20180718/zqt/kisspng-vue-js-javascript-library-angularjs-react-vue-js-5b4ebe1b93c716.7614705815318871316053.jpg"
          />
          of the world.
        </p>
      </div>
      <hr class="border border-gray-300 mb-4" />

      <img
        class="w-full max-w-full min-w-full"
        src="http://autismmommylife.com/wp-content/uploads/2020/03/Contact-Me.png"
        alt="post"
      />

      <div class="flex justify-center mt-8 mx-12">
        <img
          src="https://profile-images.xing.com/images/4b14d6609ee0ffa57c02a618833f2344-2/ninja-ewecker.1024x1024.jpg"
          class="h-20 w-20 rounded-full object-cover"
          alt=""
        />
        <div class="text-left md:mx-auto ml-12">
          <p class="flex mb-2 font-bold">Ninja Ewecker</p>
          <span class="flex mb-2 text-xs text-gray-600"
            >Sportplatzring 85, 22527 Hamburg
          </span>

          <span class="flex text-xs text-gray-600"
            >E-Mail: meyerninja@googlemail.com</span
          >
          <span class="flex text-xs text-gray-600">Mobil: 0171234567</span>
        </div>
      </div>

      <div class="px-6 pt-4 pb-3">
        <div class="flex items-start">
          <textarea
            class="w-full resize-none outline-none appearance-none"
            style="height: 36px"
          ></textarea>

          <router-link to="/contactform">
            <i class="fa fa-envelope text-red-400"></i>
          </router-link>
        </div>
      </div>
    </div>

    <div>
      <p class="text-xs pb-4">
        This website was created as part of my training as a full stack web
        developer at the Hamburg Coding School. It is the first of many
        development projects by Ninja Ewecker.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
};
</script>