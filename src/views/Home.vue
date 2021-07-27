<template>
  <div>
    <home-header />
    <home-carousel />
    <home-nav />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "../components/HomeHeader.vue";
import HomeCarousel from "../components/HomeCarousel.vue";
import HomeNav from "../components/HomeNav.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeHeader,
    HomeCarousel,
    HomeNav,
  },
});
</script>
