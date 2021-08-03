<template>
  <city-header />
  <city-search />
  <city-list />
  <city-alphabet />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CityHeader from "@/components/CityHeader.vue";
import CitySearch from "@/components/CitySearch.vue";
import CityList from "@/components/CityList.vue";
import CityAlphabet from "@/components/CityAlphabet.vue";

export default defineComponent({
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="stylus" scoped></style>
