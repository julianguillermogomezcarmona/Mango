<script>
import { useMeta } from "vue-meta";
import { RouterView } from 'vue-router';
export default {
  setup() {
    useMeta({
      title: "",
      htmlAttrs: { lang: "es", amp: true },
    });
  },
  components: {
    RouterView,
  },
};
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | Mango` : `Mango`
    }}</template>
  </metainfo>
  <RouterView />
  <!-- <h2 class="text-red-300">hola</h2>   -->
</template>
