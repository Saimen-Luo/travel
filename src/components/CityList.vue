<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="list__area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="list__area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div
        class="list__area"
        v-for="(alphabetCities, key) in cities"
        :key="key"
      >
        <div
          class="title border-topbottom"
          :ref="
            (el) => {
              if (el) alphabets[key] = el;
            }
          "
        >
          {{ key }}
        </div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="(city, index) in alphabetCities"
            :key="index"
            @click="handleCityClick(city.name)"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  ref,
  PropType,
  nextTick,
  onBeforeUpdate,
} from "vue";
import BScroll from "@better-scroll/core";

import { City, AlphabetCities } from "@/common/interfaces";
import useCommonStore from "@/composables/useCommonStore";

export default defineComponent({
  name: "CityList",
  props: {
    cities: {
      type: Object as PropType<AlphabetCities>,
      required: true,
    },
    hotCities: {
      type: Array as PropType<City[]>,
      required: true,
    },
  },
  setup(props) {
    const wrapper = ref();
    const scroll = ref();
    const alphabets = ref<{ [key: string]: HTMLElement }>({});
    const store = useCommonStore();
    // handleCityClick 无法触发？需要 配置 BScroll { click: true }
    const handleCityClick = (city: string) => {
      // console.log("click");
      store.commit("changeCity", city);
    };
    watch(
      [() => props.cities, () => store.state.clickedLetter],
      async ([currentCities, currentLetter]) => {
        if (Object.keys(currentCities).length) {
          await nextTick();
          scroll.value = new BScroll(wrapper.value, { click: true });
        }
        if (currentLetter) {
          // console.log(currentLetter);
          scroll.value.scrollToElement(alphabets.value[currentLetter]);
        }
      }
    );
    onBeforeUpdate(() => {
      alphabets.value = {};
    });

    return {
      wrapper,
      alphabets,
      store,
      handleCityClick,
    };
  },
});
</script>

<style lang="stylus" scoped>
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
