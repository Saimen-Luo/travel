<template>
  <div class="weekend">
    <div class="weekend__title">周末去哪儿</div>
    <ul class="weekend__list">
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item__img__wrapper">
          <img class="item__img" alt="item__img" :src="item.imgUrl" />
        </div>
        <div class="item__info">
          <p class="item__info__title">{{ item.title }}</p>
          <p class="item__info__desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ListItem } from "@/common/interfaces";

export default defineComponent({
  name: "HomeWeekend",
  props: {
    weekendList: {
      type: Array as PropType<ListItem[]>,
      required: true,
    },
  },
});
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins.styl';

.weekend__title {
  background: #eee;
  text-indent: 0.2rem;
  line-height: 0.8rem;
}

.item {
  &__img__wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;

    .item__img {
      width: 100%;
    }
  }

  &__info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0; // for ellipsis() to work

    &__title {
      font-size: 0.32rem;
      line-height: 0.54rem;
      ellipsis();
    }

    &__desc {
      line-height: 0.4rem;
      margin-top: 0.06rem;
      color: #ccc;
      ellipsis();
    }
  }
}
</style>
