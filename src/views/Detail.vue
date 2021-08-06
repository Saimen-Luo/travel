<template>
  <detail-banner :galleryImgs="galleryImgs" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

import DetailBanner from "@/components/DetailBanner.vue";
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
