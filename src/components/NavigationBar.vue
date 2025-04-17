<script setup lang="ts">
import { getFormattedDate } from "@/utils/date-format";

// get the current date
const currentDate = getFormattedDate(new Date());
</script>
<template>
  <header class="container md:mx-auto px-4 py-4 md:py-10">
    <nav class="flex justify-between items-center">
      <h1 class="text-2xl md:text-4xl font-bold">iTranslate</h1>
      <p class="text-xs md:text-lg font-semibold">{{ currentDate }}.</p>
    </nav>
  </header>
</template>
