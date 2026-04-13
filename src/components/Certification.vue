<script setup>
import SkillList from "@/components/SkillList.vue";
import {ArrowTopRightOnSquareIcon} from "@heroicons/vue/24/solid/index.js";

defineProps({
  date: String,
  title: String,
  issuer: String,
  link: String||null,
})
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    v-bind="link ? { href: link, target: '_blank' } : {}"
    class="block w-full px-4 py-3 text-xs border border-base-500 rounded-lg shadow hover:bg-base-700/20 h-fit"
  >
    <div class="flex justify-start items-start gap-4">
      <div>
        <h5 class="font-bold text-base-400">{{ title }} ({{ issuer }})
          <span v-if="date" class="text-base-400"> - {{ date }}</span>
        </h5>
      </div>
      <span v-if="link" class="text-base-300/50"><ArrowTopRightOnSquareIcon class="size-3 mt-2.5"/></span>
    </div>
    <slot />
  </component>
</template>

<style scoped>

</style>