<template>
  <detail-banner />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import DetailBanner from "@/components/DetailBanner.vue";

export default defineComponent({
  name: "Detail",
  components: {
    DetailBanner,
  },
});
</script>
