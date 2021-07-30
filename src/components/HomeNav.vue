<template>
  <div class="slide-wrapper" ref="slide">
    <div class="slide-content">
      <div class="slide-page" v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="icon in page" :key="icon.id">
          <div class="icon-img-wrap">
            <img :src="icon.imgUrl" :alt="icon.desc" class="icon-img" />
          </div>
          <p class="icon-desc">{{ icon.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";
import useSlide from "../composables/useSlide";
import { ListItem } from "../common/interfaces";

export default defineComponent({
  name: "HomeNav",
  props: {
    iconList: {
      type: Array as PropType<ListItem[]>,
      required: true,
    },
  },
  setup(props) {
    const { iconList } = toRefs(props);
    const { slide } = useSlide(iconList);
    const pages = computed(() => {
      const result: ListItem[][] = [];
      iconList.value.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!result[page]) {
          result[page] = [];
        }
        result[page].push(item);
      });
      return result;
    });
    return {
      slide,
      pages,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

.slide-wrapper {
  overflow: hidden;
  width: 100%;
  padding-bottom: 50%;
  height: 0;
  font-size: 0;

  .slide-page {
    overflow: hidden;
    height: 3.75rem;
    // padding-bottom: 50%;
    // display: flex;
    // flex-wrap: wrap;
    width: 100%;
    display: inline-block;

    .icon {
      width: 25%;
      padding-bottom: 25%;
      position: relative;
      height: 0;
      float: left;

      .icon-img-wrap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;

        .icon-img {
          height: 100%;
          display: block;
          margin: 0 auto;
        }
      }

      .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        color: $darkTextColor;
        font-size: 0.28rem;
        ellipsis();
      }
    }
  }
}
</style>
