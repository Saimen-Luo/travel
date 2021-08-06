<template>
  <div class="item" v-for="(item, index) in categoryList" :key="index">
    <div class="item__title border-bottom">
      <span class="title__icon"></span>
      {{ item.title }}
    </div>
    <div class="item__children" v-if="item.children">
      <detail-list :categoryList="item.children" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Category } from "@/common/interfaces";

export default defineComponent({
  name: "DetailList",
  props: {
    categoryList: {
      tyep: Array as PropType<Category[]>,
      required: true,
    },
  },
});
</script>

<style lang="stylus" scoped>
.item__title {
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;

  .title__icon {
    position: relative;
    left: 0.06rem;
    top: 0.06rem;
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
  }
}

.item__children {
  padding: 0 0.2rem;
}
</style>
