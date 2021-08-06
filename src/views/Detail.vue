<template>
  <detail-header />
  <detail-banner :galleryImgs="galleryImgs" />
  <div class="content"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

import DetailBanner from "@/components/DetailBanner.vue";
import DetailHeader from "@/components/DetailHeader.vue";
import { Response } from "@/common/interfaces";

interface Category {
  title: string;
  childern?: Category[];
}

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
  },
  setup() {
    const route = useRoute();
    const galleryImgs = ref<string[]>([]);
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
    };
  },
});
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
