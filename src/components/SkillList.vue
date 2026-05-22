<template>
  <li class="inline-block text-base-400 hover:text-white border border-base-800 hover:bg-base-900 focus:ring-4 focus:outline-none focus:ring-base-300 font-medium rounded-full
              text-xs px-2 py-1 text-center me-2 mb-2 dark:border-base-600  dark:hover:text-white dark:hover:bg-base-600 dark:focus:ring-base-800">
  <slot />
  </li>
</template>

<script>
export default {
  name: 'SkillList'
}
</script>