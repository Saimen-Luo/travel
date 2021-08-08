<template>
  <common-header>城市选择</common-header>
  <city-search :cities="cities" />
  <city-list :cities="cities" :hotCities="hotCities" />
  <city-alphabet :cities="cities" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

import CommonHeader from "@/components/CommonHeader.vue";
import CitySearch from "@/components/CitySearch.vue";
import CityList from "@/components/CityList.vue";
import CityAlphabet from "@/components/CityAlphabet.vue";
import { Response, City, AlphabetCities } from "@/common/interfaces";

interface ResponseData {
  cities: AlphabetCities;
  hotCities: City[];
}

export default defineComponent({
  name: "City",
  components: {
    CommonHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  setup() {
    const cities = ref<AlphabetCities>({});
    const hotCities = ref<City[]>([]);
    onMounted(() => {
      axios
        .get("/api/city.json")
        .then((response) => {
          let data: Response<ResponseData> = response.data;
          if (data.ret) {
            const d = data.data;
            cities.value = d.cities;
            hotCities.value = d.hotCities;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return {
      cities,
      hotCities,
    };
  },
});
</script>

<style lang="stylus" scoped></style>
