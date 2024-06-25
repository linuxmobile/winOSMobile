<template>
  <div class="col-span-4 row-span-2 bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150 rounded-md flex flex-col items-center justify-center text-center min-w-full min-h-full">
    <p>{{ formattedDate }}</p>
    <p class="text-6xl">{{ formattedTime }}</p>
  </div>
</template>
<script setup lang="ts">
const formattedDate = ref('');
const formattedTime = ref('');

const updateDateTime = () => {2
  const now = new Date();
  const optionsDate: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const optionsTime: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  formattedDate.value = now.toLocaleDateString('en-US', optionsDate);
  formattedTime.value = now.toLocaleTimeString('en-US', optionsTime);
};

onMounted(() => {
  updateDateTime();
  setInterval(updateDateTime, 60000);
});
</script>