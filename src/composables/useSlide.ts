import { watch, ref, Ref, nextTick } from "vue";
import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";
import { ListItem } from "../common/interfaces";

BScroll.use(Slide);

interface page {
  pageX: number;
}

interface SlideRet {
  slide: Ref<HTMLElement>;
  currentPageIndex: Ref<number>;
}

export default function useSlide(list: Ref<ListItem[]>, loop = true): SlideRet {
  const slide = ref();
  const currentPageIndex = ref(0);
  watch(
    () => list.value,
    async (current) => {
      if (current.length) {
        await nextTick();
        const scroll = new BScroll(slide.value, {
          scrollX: true,
          scrollY: false,
          slide: {
            loop,
            autoplay: false,
          },
          momentum: false,
          bounce: false,
          probeType: 3,
        });
        scroll.on("slideWillChange", (page: page) => {
          currentPageIndex.value = page.pageX;
        });
      }
    }
  );
  return { slide, currentPageIndex };
}
