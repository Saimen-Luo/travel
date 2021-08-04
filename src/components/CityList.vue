<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="list__area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="list__area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div
        class="list__area"
        v-for="(alphabetCities, key) in cities"
        :key="key"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="(city, index) in alphabetCities"
            :key="index"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, PropType, nextTick } from "vue";
import BScroll from "@better-scroll/core";

import { City, AlphabetCities } from "@/common/interfaces";

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
    watch(
      () => props.cities,
      async (current) => {
        if (Object.keys(current).length) {
          await nextTick();
          new BScroll(wrapper.value);
        }
      }
    );

    return {
      wrapper,
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
