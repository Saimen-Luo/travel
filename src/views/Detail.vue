<template>
  <detail-header />
  <detail-banner
    :sightName="sightName"
    :bannerImg="bannerImg"
    :galleryImgs="galleryImgs"
  />
  <div class="content">
    <detail-list :categoryList="categoryList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, defineAsyncComponent } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

import DetailBanner from "@/components/DetailBanner.vue";
import DetailHeader from "@/components/DetailHeader.vue";
import { Response, Category } from "@/common/interfaces";

interface ResponseData {
  sightName: string;
  bannerImg: string;
  galleryImgs: string[];
  categoryList: Category[];
}

export default defineComponent({
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList: defineAsyncComponent(
      () => import("@/components/DetailList.vue")
    ),
  },
  setup() {
    const route = useRoute();
    const galleryImgs = ref<string[]>([]);
    const categoryList = ref<Category[]>([]);
    const sightName = ref("");
    const bannerImg = ref("");
    const getDetailInfo = () => {
      axios
        .get("/api/detail.json", {
          params: {
            id: route.params.id,
          },
        })
        .then((response) => {
          let data: Response<ResponseData> = response.data;
          // console.log(data);
          if (data.ret) {
            const d = data.data;
            galleryImgs.value = d.galleryImgs;
            categoryList.value = d.categoryList;
            sightName.value = d.sightName;
            bannerImg.value = d.bannerImg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    onMounted(() => {
      getDetailInfo();
    });
    return {
      galleryImgs,
      categoryList,
      sightName,
      bannerImg,
    };
  },
});
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
