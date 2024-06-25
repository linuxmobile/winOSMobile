<template>
  <section class="pb-9 w-full bg-sky-950/30 backdrop-blur-2xl max-w-md mx-auto backdrop-saturate-150 flex flex-col items-center px-4 gap-y-6">
    <div class="bg-gray-300/60 w-18 h-1 rounded-full mt-2"></div>
    <form class="bg-black/50 w-full h-10 rounded-md flex items-center justify-center px-3 gap-x-2">
      <Copilot class="size-5" />
      <input type="text" class="w-full h-full bg-transparent text-white text-start placeholder-white/70 outline-none" placeholder="Type here to Search" />
    </form>
    <div class="grid grid-cols-14 mt-2 *:size-10 w-full place-items-center content-between">
      <Phone />
      <Message class="col-start-4" />
      <StartMenu class="col-start-7 col-end-9" />
      <Settings class="col-start-11"/>
      <Outlook class="col-start-14"/>
    </div>
  </section>
</template>
<script setup lang="ts">
import Copilot from '~/assets/copilot.vue'
import Phone from '~/assets/phone.vue';
import Message from '~/assets/message.vue';
import StartMenu from '~/assets/startmenu.vue';
import Settings from '~/assets/settings.vue';
import Outlook from '~/assets/outlook.vue';
</script>