<template>
  <div class="list">
    <div
      class="item"
      v-for="(item, index) in letters"
      :key="item"
      :class="{ 'item--current': currentIndex == index }"
      @click="handleLetterClick"
      @touchmove="handleTouchMove"
      :ref="
        (el) => {
          if (el) {
            alphabets[item] = el;
          }
        }
      "
    >
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, nextTick, PropType, ref } from "vue";

import { AlphabetCities } from "@/common/interfaces";
import useCommonStore from "@/composables/useCommonStore";

export default defineComponent({
  name: "CityAlphabet",
  props: {
    cities: {
      type: Object as PropType<AlphabetCities>,
      required: true,
    },
  },
  setup(props) {
    const currentIndex = ref<number>();
    const alphabets = ref<{ [key: string]: HTMLElement }>({});
    const startY = ref(0);
    const timer = ref();
    const letters = computed(() => Object.keys(props.cities));
    const store = useCommonStore();
    watch(
      () => letters.value,
      async () => {
        await nextTick();
        startY.value = alphabets.value["A"].offsetTop;
      }
    );
    const handleLetterClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // console.log(target.innerText);
      store.commit("changeLetter", target.innerText);
      currentIndex.value = letters.value.indexOf(target.innerText);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (timer.value) {
        clearTimeout(timer.value);
      }
      timer.value = setTimeout(() => {
        // 只有 touchmove 事件e.touches有值
        // console.log("touchMove", e.touches);
        // rem = 50px
        // .header 0.86rem + .search 0.72rem
        // offsetTop：document 属性，相当于父元素
        // clientY 事件对象属性，相对于 视口
        const rootFontSize = Number.parseInt(
          document.documentElement.style.fontSize
        );
        // console.log(rootFontSize);
        const touchY = e.touches[0].clientY - (0.86 + 0.72) * rootFontSize;
        // .item 0.4 rem
        currentIndex.value = Math.floor(
          (touchY - startY.value) / (0.4 * rootFontSize)
        );
        const letter = letters.value[currentIndex.value];
        // console.log(letter);
        if (letter) {
          store.commit("changeLetter", letter);
        }
      }, 20);
    };
    return {
      letters,
      alphabets,
      currentIndex,
      handleLetterClick,
      handleTouchMove,
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

    &--current {
      color: $bgColor;
      // transform: translateX(-0.1rem);
    }
  }
}
</style>
