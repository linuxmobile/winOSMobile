<template>
  <div v-if="localStorageChecked">
    <Bootanimation v-if="!sessionStarted" />
    <Homescreen v-else />
  </div>
</template>

<script setup lang="ts">
const sessionStarted = ref(false);
const localStorageChecked = ref(false);

onMounted(() => {
  const session = localStorage.getItem('sessionStarted');
  if (session === 'true') {
    sessionStarted.value = true;
  } else {
    setTimeout(() => {
      sessionStarted.value = true;
    }, 5000);
    localStorage.setItem('sessionStarted', 'true');
  }
  localStorageChecked.value = true;
});
</script>