<template>
  <city-header />
  <city-search />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CityHeader from "@/components/CityHeader.vue";
import CitySearch from "@/components/CitySearch.vue";

export default defineComponent({
  name: "City",
  components: {
    CityHeader,
    CitySearch,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="stylus" scoped></style>
