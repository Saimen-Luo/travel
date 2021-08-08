<template>
  <div class="container" @click="handleGalleryClick">
    <div class="slide-wrapper" ref="slide">
      <div class="slide-content">
        <img
          v-for="img in galleryImgs"
          :src="img"
          :key="img"
          alt="img"
          class="slide-page"
        />
      </div>
    </div>
    <div v-if="slide" class="page-info">
      {{ currentPageIndex + 1 }} / {{ galleryImgs.length }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";

import { Page } from "@/common/interfaces";

BScroll.use(Slide);

export default defineComponent({
  name: "Gallery",
  props: {
    galleryImgs: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  emits: ["closeGallery"],
  setup(props, { emit }) {
    const slide = ref();
    const currentPageIndex = ref(0);
    const handleGalleryClick = () => {
      emit("closeGallery");
    };
    onMounted(() => {
      const scroll = new BScroll(slide.value, {
        scrollX: true,
        scrollY: false,
        slide: {
          loop: false,
          autoplay: false,
        },
        momentum: false,
        bounce: false,
        probeType: 3,
      });
      scroll.on("slideWillChange", (page: Page) => {
        currentPageIndex.value = page.pageX;
      });
    });
    return {
      slide,
      currentPageIndex,
      handleGalleryClick,
    };
  },
});
</script>

<style lang="stylus" scoped>
.container {
  background-color: #000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .slide-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 100%;
    width: 100%;

    .slide-page {
      width: 100%;
    }
  }

  .page-info {
    color: #fff;
    text-align: center;
    margin-top: 0.5rem;
  }
}
</style>
