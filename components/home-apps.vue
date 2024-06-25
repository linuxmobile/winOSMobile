<template>
  <section class="grid grid-cols-6 grid-rows-10 p-4 h-full w-full gap-4 pt-12">
    <Clock />
    <Weather />
  </section>
</template>
<script setup lang="ts">
import Clock from './apps/clock.vue';
import Weather from './apps/weather.vue';
</script>