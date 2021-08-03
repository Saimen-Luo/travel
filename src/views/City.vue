<template>
  <city-header />
  <city-search />
  <city-list />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CityHeader from "@/components/CityHeader.vue";
import CitySearch from "@/components/CitySearch.vue";
import CityList from "@/components/CityList.vue";

export default defineComponent({
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="stylus" scoped></style>
