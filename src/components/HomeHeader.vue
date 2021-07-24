<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont back-icon">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <i class="iconfont arrow-icon">&#xe64a;</i>
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
.header {
  display: flex;
  justify-content: space-between;
  line-height: 0.86rem;
  background-color: #00bcd4;
  color: #fff;

  .header-left {
    width: 0.64rem;
    text-align: center;

    .back-icon {
      font-size: 0.4rem;
    }
  }

  .header-input {
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

  .header-right {
    width: 1.24rem;
    text-align: center;

    .arrow-icon {
      font-size: 0.24rem;
    }
  }
}
</style>
