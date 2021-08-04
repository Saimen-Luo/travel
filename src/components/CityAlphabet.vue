<template>
  <div class="list">
    <div
      class="item"
      v-for="(item, key) in cities"
      :key="key"
      @click="handleLetterClick"
    >
      {{ key }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useStore } from "vuex";

import { AlphabetCities } from "@/common/interfaces";
import { GlobalState } from "@/store";

export default defineComponent({
  name: "CityAlphabet",
  props: {
    cities: {
      type: Object as PropType<AlphabetCities>,
      required: true,
    },
  },
  setup() {
    const store = useStore<GlobalState>();
    const handleLetterClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // console.log(target.innerText);
      store.commit("changeLetter", target.innerText);
    };
    return {
      handleLetterClick,
    };
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
