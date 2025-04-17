<script setup lang="ts">
import { ref } from "vue";

import { PhUserSound, PhRobot } from "@phosphor-icons/vue";

const text = ref("");
</script>
<template>
  <section class="container md:mx-auto px-4">
    <div
      class="flex items-center justify-center md:w-5xl w-full mx-auto md:gap-4 gap-1"
    >
      <input
        v-model="text"
        type="text"
        placeholder="What are you translating today?.."
        class="w-full outline-none border-gray-400 border-2 rounded-lg px-2 md:px-4 py-2 md:py-4 text-sm md:text-lg"
      />
      <button
        :class="[
          'rounded-lg text-sm md:text-xl p-2 md:p-4 font-semibold outline-none',
          text.length <= 0
            ? ['bg-black/45 text-white']
            : ['bg-black text-white'],
        ]"
        :disabled="text.length <= 0"
      >
        Translate
      </button>
    </div>
    <!-- where the question will show -->
    <div
      v-show="text.length > 0"
      class="flex items-center justify-start md:w-5xl w-full mx-auto mt-4 gap-2"
    >
      <PhUserSound :size="40" />
      <div
        :class="[
          'bg-gray-200 md:max-w-3xl md:w-3xl w-full rounded-lg',
          text.length === 0 ? 'p-0' : 'p-2',
        ]"
      >
        <p class="md:max-w-3xl md:w-3xl w-full">
          {{ text }}
        </p>
      </div>
    </div>
    <!-- where the response from the AI will be -->
    <div
      class="flex items-center justify-end md:w-5xl w-full mx-auto mt-4 gap-2"
    >
      <div
        :class="[
          'bg-gray-200 md:max-w-3xl md:w-3xl w-full rounded-lg',
          text.length === 0 ? 'p-0' : 'p-2',
        ]"
      >
        <p class="md:max-w-3xl md:w-3xl w-full">
          {{ text }}
        </p>
      </div>
      <PhRobot :size="40" />
    </div>
  </section>
</template>
