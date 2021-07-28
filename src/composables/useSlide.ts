import { onMounted, ref } from "vue";
import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";

BScroll.use(Slide);

interface page {
    pageX: number;
}

export default function useSlide() {
    const slide = ref();
    const currentPageIndex = ref(0);
    onMounted(() => {
        const scroll = new BScroll(slide.value, {
            scrollX: true,
            scrollY: false,
            slide: {
                loop: true,
                autoplay: false,
            },
            momentum: false,
            bounce: false,
            probeType: 3,
        });
        scroll.on("slideWillChange", (page: page) => {
            currentPageIndex.value = page.pageX;
        });
    });
    return { slide, currentPageIndex }
}