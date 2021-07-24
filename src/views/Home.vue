<template>
  <div>
    <home-header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "../components/HomeHeader.vue";

export default defineComponent({
  name: "Home",
  components: {
    HomeHeader,
  },
});
</script>
