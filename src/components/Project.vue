<script setup>
import SkillList from "@/components/SkillList.vue";

defineProps({
  link: String,
  title: String,
  description: String,
  year: String,
  skills: Array,
})
</script>

<template>

  <a :href="link" target="_blank"
     class="block w-full px-4 py-3 text-xs border border-base-500 rounded-lg shadow hover:bg-base-700 h-fit">
    <span class="float-end text-base-400/50">🡥</span>
      <h5 class="font-bold tracking-tight text-base-400 p-0 pb-1">{{ title }}</h5>
      <p class="font-normal p-0">{{ description }}</p>
    <div class="flex justify-between items-baseline">
      <div class="inline-block">
        <SkillList v-for="skill in skills" :key="skill" class="mb-0 mt-2">{{ skill }}</SkillList>
      </div>
      <p class="font-light text-base-400 p-0 pt-1 text-[0.6rem] inline float-end  ">{{ year }}</p>
    </div>
  </a>
</template>

<style scoped>

</style>