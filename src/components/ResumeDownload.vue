<script setup>
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/solid/index.js";

defineProps({
  text: String,
  link: String,
})
</script>

<template>
  <div class="flex justify-center lg:justify-start">
    <a
        target="_blank"
        :href="link ?? 'https://www.dropbox.com/scl/fi/veqmxnodxm2gr9uafk5hj/Ahmed-Deghady-Resume.pdf?rlkey=yypcp5bd7x4id98i3eqk87zmk&st=u54nnhy1&dl=0'"
        class="inline-flex items-center justify-center gap-2 px-4 py-2 font-medium text-center rounded-lg border border-base-500 hover:bg-base-700/30"
    >
      <ArrowTopRightOnSquareIcon class="w-5 h-5" />
      <span class="-mb-1">{{ text ?? "Resume on Dropbox" }}</span>
    </a>
  </div>
</template>

<style scoped>
</style>