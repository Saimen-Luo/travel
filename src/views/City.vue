<template>
  <city-header />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CityHeader from "@/components/CityHeader.vue";

export default defineComponent({
  name: "City",
  components: { CityHeader },
  setup() {
    return {};
  },
});
</script>

<style lang="stylus" scoped></style>
