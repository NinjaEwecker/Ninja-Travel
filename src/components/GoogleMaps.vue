<template>
  <div>
    <GMapMap
      ref="myMapRef"
      :center="{
        lat: carddetails[carddetails.length - 1].lat,
        lng: carddetails[carddetails.length - 1].lng,
      }"
      :zoom="2"
      map-type-id="terrain"
      :options="{
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: true,
      }"
      style="width: auto; height: 675px"
    >
      <GMapCluster>
        <GMapMarker
          v-for="marker in markers"
          :key="marker.id"
          :position="{ lat: marker.lat, lng: marker.lng }"
          :zoomOnClick="true"
          :clickable="true"
          :clicked="false"
          @click="openInfoWindow(marker)"
        >
          <GMapInfoWindow
            ref="infoWindow"
            :opened="marker.opened ? true : false"
            :options="{
              pixelOffset: {
                width: 0,
                height: 0,
              },
              maxWidth: 320,
              maxHeight: 320,
            }"
          >
            <div>
              <router-link
                :to="{ name: 'DetailPage', params: { id: marker.id } }"
              >
                <div class="inline-flex my-2 mx-auto mr-10">
                  <p class="mr-4 text-base font-bold">{{ marker.city }}</p>
                  <p class="my-auto text-right text-xs">
                    {{ marker.visitDate }}
                  </p>
                </div>
                <div class="flex justify-center ml-2">
                  <img
                    class="w-36 h-20"
                    :src="marker.img"
                    :alt="marker.country"
                  />
                </div>
                <div class="inline-flex mt-4 mr-10">
                  <img
                    class="w-6 h-6 rounded-full mr-4"
                    :src="marker.authorimg"
                    alt=""
                  />
                  <p class="my-auto">{{ marker.authorname }}</p>
                </div>
              </router-link>
            </div>
          </GMapInfoWindow>
        </GMapMarker>
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script >
export default {
  name: "GoogleMaps",

  props: {
    carddetails: Array,
  },
  data() {
    return {
      markers: this.carddetails,
    };
  },

  emits: ["openInfoWindow"],

  methods: {
    openInfoWindow(marker) {
      console.log("Marker is clicked", marker.id);
      this.$emit("openInfoWindow", marker.id);
      marker.opened = !marker.opened;
      console.log(marker.opened);
    },
  },
};
</script>