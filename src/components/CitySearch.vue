<template>
  <div class="search">
    <input
      v-model="keyword"
      class="search__input"
      type="text"
      placeholder="输入城市名或拼音"
    />
  </div>
  <div class="search__content" v-if="keyword" ref="wrapper">
    <ul>
      <li
        class="item borden-bottom"
        v-for="item in list"
        :key="item.id"
        @click="handleCityClick(item.name)"
      >
        {{ item.name }}
      </li>
      <li class="item borden-bottom" v-if="!list.length">没有找到匹配数据</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import BScroll from "@better-scroll/core";

import { AlphabetCities, City } from "@/common/interfaces";
import useCommonStore from "@/composables/useCommonStore";

export default defineComponent({
  name: "CitySearch",
  props: {
    cities: {
      type: Object as PropType<AlphabetCities>,
      required: true,
    },
  },
  setup(props) {
    const keyword = ref("");
    const wrapper = ref();
    const router = useRouter();
    const store = useCommonStore();
    const handleCityClick = (city: string) => {
      store.commit("changeCity", city);
      router.push("/");
    };
    const list = computed(() => {
      const result: City[] = [];
      if (keyword.value) {
        for (const i in props.cities) {
          props.cities[i].forEach((item) => {
            if (
              item.spell.indexOf(keyword.value) > -1 ||
              item.name.indexOf(keyword.value) > -1
            ) {
              result.push(item);
            }
          });
        }
      }
      return result;
    });
    watch(
      () => list.value,
      async (current) => {
        if (current.length) {
          await nextTick();
          new BScroll(wrapper.value, { click: true });
        }
      }
    );
    return {
      keyword,
      list,
      wrapper,
      handleCityClick,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.search {
  margin-top: 0.86rem;
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

.search__content {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  z-index: 1;
  overflow: hidden;

  .item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>
