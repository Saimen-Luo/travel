<template>
  <router-link to="/" class="header-abs" v-if="showAbs">
    <i class="iconfont header__left__icon">&#xe624;</i>
  </router-link>
  <common-header :style="{ opacity }" v-else>景点详情</common-header>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

import CommonHeader from "@/components/CommonHeader.vue";

export default defineComponent({
  name: "DetailHeader",
  components: {
    CommonHeader,
  },
  setup() {
    const showAbs = ref(true);
    const opacity = ref(0);
    const handleScroll = () => {
      const top = document.documentElement.scrollTop;
      // console.log(top);
      const rootFontSize = Number.parseInt(
        document.documentElement.style.fontSize
      );
      const absOpacity0 = 1.2 * rootFontSize;
      const absOpacity1 = 2.8 * rootFontSize;
      if (top > absOpacity0) {
        opacity.value = top / absOpacity1 > 1 ? 1 : top / absOpacity1;
        showAbs.value = false;
      } else {
        showAbs.value = true;
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return {
      showAbs,
      opacity,
    };
  },
});
</script>

<style lang="stylus" scoped>
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  color: #ff;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
}
</style>
