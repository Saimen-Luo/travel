<template>
  <div class="search">
    <input class="search__input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CitySearch",
  setup() {
    return {};
  },
});
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search__input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
</style>
