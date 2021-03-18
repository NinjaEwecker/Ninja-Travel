<template>
  <div class="flex flex-wrap md mx-auto items-center h-screen">
    <div
      class="bg-gradient-to-r from-gray-50 to-gray-300 mx-auto w-full md:w-1/2 h-screen"
    >
      <div class="mx-20 md:mx-32 mt-30">
        <h1 class="text-6xl font-bold mt-10">{{ card.country }}</h1>

        <!-- country region island -->
        <div class="flex mt-10 font-light justify-center text-gray-500">
          <div class="pr-4">
            <span class="uppercase">Country</span>
            <p class="text-2xl text-gray-900 font-semibold pt-2">
              {{ card.country }}
            </p>
          </div>
          <div class="pr-4">
            <span class="uppercase">Region</span>
            <p class="text-2xl text-gray-900 font-semibold pt-2">
              {{ card.region }}
            </p>
          </div>
          <div class="pr-4">
            <span class="uppercase">City</span>
            <p class="text-2xl text-gray-900 font-semibold pt-2">
              {{ card.city }}
            </p>
          </div>
        </div>
        <p class="mt-8 text-lg">
          {{ card.visitDate }}
        </p>

        <!-- description -->
        <div class="description mt-5 w-full md:mt-10 text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iusto
          cupiditate perspiciatis veritatis, ut distinctio dolorum architecto
          quibusdam facilis sint corrupti debitis saepe maiores itaque beatae
          adipisci unde aspernatur alias nobis repudiandae pariatur doloremque
          mollitia! Quas, nobis error delectus minima, harum non similique eaque
          nisi, et quae asperiores hic aut.
        </div>
        <a :href="card.wikipedia" alt="" target="_blank">
          <Button
            class="uppercase mt-10 text-sm font-semibold"
            text="Read more"
          />
        </a>

        <div class="flex justify-start mt-6">
          <img
            :src="card.authorimg"
            class="w-10 h-10 mr-4 rounded-full"
            alt=""
          />
          <p class="my-auto">{{ card.authorname }}</p>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 h-screen">
      <img :src="card.img" class="h-screen w-full" alt="" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "PostDetails",

  components: {
    Button,
  },

  props: {
    card: Array,
  },
};
</script>