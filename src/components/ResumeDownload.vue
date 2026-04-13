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
        :href="link ?? 'https://www.dropbox.com/scl/fo/4dr2yoo8kcuyp2w9y6ren/AKnBh-YFuwhk0JAh9Nq0EGw?rlkey=8jidqefq97z62v8j7ss3wx6wm&st=jzl5g3j0&dl=0'"
        class="inline-flex items-center justify-center gap-2 px-4 py-2 font-medium text-center rounded-lg border border-base-500 hover:bg-base-700/30"
    >
      <ArrowTopRightOnSquareIcon class="w-5 h-5" />
      <span class="-mb-1">{{ text ?? "Resume on Dropbox" }}</span>
    </a>
  </div>
</template>

<style scoped>
</style>