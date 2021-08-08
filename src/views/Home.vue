<template>
  <div>
    <home-header />
    <home-carousel :swiperList="swiperList" />
    <home-nav :iconList="iconList" />
    <home-recommend :recommendList="recommendList" />
    <home-weekend :weekendList="weekendList" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onActivated, onMounted, ref } from "vue";
import axios from "axios";

import HomeHeader from "../components/HomeHeader.vue";
import HomeCarousel from "../components/HomeCarousel.vue";
import HomeNav from "../components/HomeNav.vue";
import HomeRecommend from "../components/HomeRecommend.vue";
import HomeWeekend from "../components/HomeWeekend.vue";
import { ListItem, Response } from "../common/interfaces";
import useCommonStore from "@/composables/useCommonStore";

interface ResponseData {
  iconList: ListItem[];
  recommendList: ListItem[];
  swiperList: ListItem[];
  weekendList: ListItem[];
}

export default defineComponent({
  name: "Home",
  components: {
    HomeHeader,
    HomeCarousel,
    HomeNav,
    HomeRecommend,
    HomeWeekend,
  },
  setup() {
    const iconList = ref<ListItem[]>([]);
    const recommendList = ref<ListItem[]>([]);
    const swiperList = ref<ListItem[]>([]);
    const weekendList = ref<ListItem[]>([]);
    const store = useCommonStore();
    let lastCity = "";
    const city = computed(() => store.state.city);
    const getHomeInfo = () => {
      axios
        .get("/api/index.json?city=" + city.value)
        .then((response) => {
          let data: Response<ResponseData> = response.data;
          // console.log(data);
          if (data.ret) {
            const d = data.data;
            iconList.value = d.iconList;
            recommendList.value = d.recommendList;
            swiperList.value = d.swiperList;
            weekendList.value = d.weekendList;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    onMounted(() => {
      // console.log("mounted");
      lastCity = city.value;
      getHomeInfo();
    });
    onActivated(() => {
      // console.log("activated");
      // console.log(city.value);
      if (lastCity != city.value) {
        lastCity = city.value;
        getHomeInfo();
      }
    });
    return { iconList, recommendList, swiperList, weekendList };
  },
});
</script>
