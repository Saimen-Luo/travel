<template>
  <div class="list">
    <div class="item" v-for="(item, key) in cities" :key="key">{{ key }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { AlphabetCities } from "@/common/interfaces";

export default defineComponent({
  name: "CityAlphabet",
  props: {
    cities: {
      type: Object as PropType<AlphabetCities>,
      required: true,
    },
  },
});
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.list {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
