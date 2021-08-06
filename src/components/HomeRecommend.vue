<template>
  <div class="recommend">
    <div class="recommend__title">热销推荐</div>
    <ul class="recommend__list">
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img class="item__img" alt="item__img" :src="item.imgUrl" />
        <div class="item__info">
          <p class="item__info__title">{{ item.title }}</p>
          <p class="item__info__desc">{{ item.desc }}</p>
          <button class="item__info__button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ListItem } from "@/common/interfaces";

export default defineComponent({
  name: "HomeRecommend",
  props: {
    recommendList: {
      type: Array as PropType<ListItem[]>,
      required: true,
    },
  },
});
</script>

<style lang="stylus" scoped>
@import '../assets/styles/mixins.styl';

.recommend__title {
  background: #eee;
  text-indent: 0.2rem;
  line-height: 0.8rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  &__img {
    height: 1.7rem;
    width: 1.7rem;
    padding: 0.1rem;
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

    &__button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>
