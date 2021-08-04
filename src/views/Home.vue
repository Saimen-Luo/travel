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
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";

import HomeHeader from "../components/HomeHeader.vue";
import HomeCarousel from "../components/HomeCarousel.vue";
import HomeNav from "../components/HomeNav.vue";
import HomeRecommend from "../components/HomeRecommend.vue";
import HomeWeekend from "../components/HomeWeekend.vue";
import { ListItem, Response } from "../common/interfaces";

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
    onMounted(() => {
      axios
        .get("/api/index.json")
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
    });
    return { iconList, recommendList, swiperList, weekendList };
  },
});
</script>
