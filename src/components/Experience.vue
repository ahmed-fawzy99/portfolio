<script setup>
import {ArrowTopRightOnSquareIcon} from "@heroicons/vue/24/solid/index.js";
import SkillList from "@/components/SkillList.vue";

defineProps({
  startDate: String,
  endDate: String,
  title: String,
  company: String,
  location: String,
  skills: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="block w-full px-4 py-3 text-xs border border-base-500 rounded-lg shadow hover:bg-base-700/20 h-fit">
    <div class="flex max-sm:flex-col max-sm:items-start justify-between items-center">
      <h5 class="font-bold tracking-tight text-base-400 p-0 pb-1">{{ title }} [{{company}}{{location ? ` - ${location}` : ''}}]</h5>
      <p>{{startDate}} - {{endDate ?? 'present'}}</p>
    </div>
    <slot />
    <div v-if="skills.length > 0" class="flex justify-between items-baseline">
      <ul class="inline-block">
        <SkillList v-for="skill in skills" :key="skill">{{ skill }}</SkillList>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>