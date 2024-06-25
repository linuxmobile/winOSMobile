<template>
  <section class="grid grid-cols-6 grid-rows-10 p-4 h-full w-full gap-4 pt-12">
    <Clock />
    <Weather />
    <DownloadFolder class="w-full h-full col-span-1 row-span-1 p-1 rounded-md bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150"/>
    <VideosFolder class="w-full h-full col-span-1 row-span-1 p-1 rounded-md bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150" />
    <picture class="col-span-2 row-span-2 grid place-content-center rounded-md bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150 ">
      <img src="/assets/weather.png" alt="Sunny" class="size-12">
    </picture>
    <MusicFolder class="w-full h-full col-span-1 row-span-1 p-1 rounded-md bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150" />
    <FileExplorer class="w-full h-full col-span-1 row-span-1 p-1 rounded-md bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150" />
    <MusicFolder class="w-full h-full col-span-1 row-span-1 p-1 rounded-md bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150" />
    <FileExplorer class="w-full h-full col-span-1 row-span-1 p-1 rounded-md bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150" />
    <MusicFolder class="w-full h-full col-span-1 row-span-1 p-1 rounded-md bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150" />
    <FileExplorer class="w-full h-full col-span-1 row-span-1 p-1 rounded-md bg-sky-950/30 backdrop-blur-xl backdrop-saturate-150" />
  </section>
</template>
<script setup lang="ts">
import Clock from './apps/clock.vue';
import Weather from './apps/weather.vue';
import DownloadFolder from '~/assets/download-folder.vue';
import VideosFolder from '~/assets/videos-folder.vue';
import MusicFolder from '~/assets/music-folder.vue';
import FileExplorer from '~/assets/file-explorer.vue';
</script>