<template>
  <div class="header">
    <slot />
    <router-link to="/">
      <i class="iconfont header__left__icon">&#xe624;</i>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommonHeader",
  setup() {
    return {};
  },
});
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header__left__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
