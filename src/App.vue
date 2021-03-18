<template>
  <div class="text-center">
    <Header title="Ninja Travel" />

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :carddetails="carddetails" :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },

  data() {
    return {
      carddetails: [],
      id: "",
    };
  },

  created() {
    this.carddetails = [
      {
        id: 1,
        img:
          "https://wttwblog.b-cdn.net/wp-content/uploads/sydney_sehenswuerdigkeiten_oper.jpg",
        country: "Australia",
        city: "Sydney",
        region: "New South Wales",
        visitDate: 2009,
        lat: -33.865143,
        lng: 151.2099,
        authorimg:
          "https://www.welt.de/img/kmpkt/mobile166136611/2262505087-ci102l-w1024/Close-up-portrait-of-a-girl.jpg",
        authorname: "Insa Kluge",
        wikipedia: "https://de.wikipedia.org/wiki/Sydney",
      },

      {
        id: 2,
        img:
          "https://akademis-internatsberatung.de/wp-content/uploads/2020/05/Sch%C3%BClersprachreisen-england-1024x683.jpg",
        country: "England",
        city: "London",
        region: "Greater London",
        visitDate: 2011,
        lat: 52.3555177,
        lng: -1.1743197,
        authorimg:
          "http://soundbites.de/wp-content/uploads/2019/02/KI-Person.jpg",
        authorname: "Nele Meyer",
        wikipedia: "https://de.wikipedia.org/wiki/London",
      },

      {
        id: 3,
        img:
          "https://cdn.prod.www.spiegel.de/images/43018bb6-0001-0004-0000-000000884982_w996_r1.77_fpx61.5_fpy50.jpg",
        country: "Norway",
        city: "Bergen",
        region: "Vestland",
        visitDate: 2010,
        lat: 60.5000209,
        lng: 9.0999715,
        authorimg:
          "https://www.mannsein-konferenz.org/wp-content/uploads/2020/02/Profilbild-Matthias-Hahn.jpg",
        authorname: "Jan Buggel",
        wikipedia: "https://de.wikipedia.org/wiki/Bergen_(Norwegen)",
      },
      {
        id: 4,
        img:
          "https://www.voucherwonderland.com/reisemagazin/wp-content/uploads/2018/02/Warschau-Altstadt-1.jpg",
        country: "Poland",
        city: "Warsaw",
        region: "Masowien",
        visitDate: 2018,
        lat: 51.9227505,
        lng: 19.136874499999976,
        authorimg:
          "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
        authorname: "Adrian Bloch",
        wikipedia: "https://de.wikipedia.org/wiki/Warschau",
      },
    ];
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

#nav a.router-link-exact-active {
  color: #dd5e5a;
}
body {
  font-family: "Rubik", sans-serif;
}
</style>
