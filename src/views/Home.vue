<template>
  <div>
    <home-header />
    <home-carousel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "../components/HomeHeader.vue";
import HomeCarousel from "../components/HomeCarousel.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeHeader,
    HomeCarousel,
  },
});
</script>
