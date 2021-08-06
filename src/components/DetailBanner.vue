<template>
  <div class="banner" @click="handleBannerClick">
    <img
      class="banner__img"
      src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      alt="banner-img"
    />
    <div class="banner__info">
      <div class="info__title">大连圣亚海洋世界(AAAA景区)</div>
      <div class="info__number">
        <i class="iconfont img-icon">&#xe692;</i>
        39
      </div>
    </div>
  </div>
  <gallery
    :galleryImgs="galleryImgs"
    v-if="showGallery"
    @closeGallery="onCloseGallery"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import Gallery from "@/components/Gallery.vue";

export default defineComponent({
  name: "DetailBanner",
  components: {
    Gallery,
  },
  props: {
    galleryImgs: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup() {
    const showGallery = ref(false);
    const handleBannerClick = () => {
      showGallery.value = true;
    };
    const onCloseGallery = () => {
      showGallery.value = false;
    };
    return {
      showGallery,
      handleBannerClick,
      onCloseGallery,
    };
  },
});
</script>

<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  &__img {
    width: 100%;
  }

  &__info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    display: flex;
    line-height: 0.6rem;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .info__title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .info__number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .img-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
