<template>
  <div class="header">
    <div class="header__left">
      <i class="iconfont header__left__icon">&#xe624;</i>
    </div>
    <div class="header__input">
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩主题
    </div>
    <div class="header__right">
      城市
      <i class="iconfont header__right__icon">&#xe64a;</i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeHeader",
});
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.header {
  display: flex;
  justify-content: space-between;
  line-height: 0.86rem;
  background-color: $bgColor;
  color: #fff;

  &__left {
    width: 0.64rem;
    text-align: center;

    &__icon {
      font-size: 0.4rem;
    }
  }

  &__input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    border-radius: 0.1rem;
    background-color: #fff;
    color: #ccc;
  }

  &__right {
    width: 1.24rem;
    text-align: center;
    margin-top: 0.02rem;

    &__icon {
      font-size: 0.24rem;
    }
  }
}
</style>
