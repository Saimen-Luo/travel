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
import { computed, defineComponent } from "vue";
import useSlide from "../composables/useSlide";

interface icon {
  id: string;
  imgUrl: string;
  desc: string;
}

const iconList: icon[] = [
  {
    id: "0001",
    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
    desc: "景点门票",
  },
  {
    id: "0002",
    imgUrl: "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
    desc: "滑雪季",
  },
  {
    id: "0003",
    imgUrl: "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
    desc: "泡温泉",
  },
  {
    id: "0004",
    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
    desc: "动植园",
  },
  {
    id: "0005",
    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
    desc: "游乐园",
  },
  {
    id: "0006",
    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
    desc: "必游榜单",
  },
  {
    id: "0007",
    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
    desc: "演出",
  },
  {
    id: "0008",
    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
    desc: "城市观光",
  },
  {
    id: "0009",
    imgUrl: "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
    desc: "一日游",
  },
];

export default defineComponent({
  name: "HomeNav",
  setup() {
    const { slide } = useSlide();
    const pages = computed(() => {
      const result: icon[][] = [];
      iconList.forEach((item, index) => {
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
