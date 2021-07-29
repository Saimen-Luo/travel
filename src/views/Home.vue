<template>
  <div>
    <home-header />
    <home-carousel />
    <home-nav />
    <home-recommend />
    <home-weekend />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "../components/HomeHeader.vue";
import HomeCarousel from "../components/HomeCarousel.vue";
import HomeNav from "../components/HomeNav.vue";
import HomeRecommend from "../components/HomeRecommend.vue";
import HomeWeekend from "../components/HomeWeekend.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeHeader,
    HomeCarousel,
    HomeNav,
    HomeRecommend,
    HomeWeekend,
  },
});
</script>
