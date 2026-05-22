<script setup>

</script>

<template>
  <div class="h-full lg:h-screen w-full lg:grid lg:grid-cols-2 bg-base-950 bg-gradient-to-bl from-base-950 to-indigo-950/30 px-8 lg:px-32 pt-16 lg:pb-4 gap-4">
    <div class="col-span-1 overflow-hidden" id="left-content">
        <slot name="left-content"/>
    </div>

    <div class="col-span-1 overflow-x-hidden overflow-y-scroll no-scrollbar" id="right-content">
      <slot name="right-content"/>
    </div>
  </div>
</template>

<style scoped>

</style>