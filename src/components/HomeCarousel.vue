<template>
  <div class="slide-wrapper" ref="slide">
    <div class="slide-content">
      <img
        v-for="swiper in swiperList"
        :src="swiper.imgUrl"
        :key="swiper.id"
        alt="swiper-img"
        class="slide-page"
      />
    </div>
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="num in swiperList.length"
        :key="num"
        :class="{ active: currentPageIndex === num - 1 }"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useSlide from "../composables/useSlide";

const swiperList = [
  {
    id: "0001",
    imgUrl:
      "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg",
  },
  {
    id: "0002",
    imgUrl:
      "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg",
  },
];

export default defineComponent({
  setup() {
    const { slide, currentPageIndex } = useSlide();
    return {
      swiperList,
      slide,
      currentPageIndex,
    };
  },
});
</script>

<style lang="stylus" scoped>
.slide-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  .slide-page {
    width: 100%;
  }

  .dots-wrapper {
    position: absolute;
    bottom: 0.08rem;
    left: 50%;
    transform: translateX(-50%);

    .dot {
      display: inline-block;
      margin: 0 0.08rem;
      width: 0.16rem;
      height: 0.16rem;
      border-radius: 50%;
      background: #eee;

      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
