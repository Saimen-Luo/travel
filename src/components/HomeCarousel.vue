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
import { defineComponent, PropType, toRefs } from "vue";
import useSlide from "../composables/useSlide";
import { ListItem } from "../common/interfaces";

export default defineComponent({
  props: {
    swiperList: {
      type: Array as PropType<ListItem[]>,
      required: true,
    },
  },
  setup(props) {
    const { slide, currentPageIndex } = useSlide(toRefs(props).swiperList);
    return {
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
