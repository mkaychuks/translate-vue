<script setup lang="ts">
import { ref } from "vue";
import { PhUserSound, PhRobot } from "@phosphor-icons/vue";
import axios from "axios";

const text = ref<string>("");
const translatedText = ref<string>("");
const isLoading = ref<boolean>(false);

// calling the function to reach the api
const translateText = async () => {
  isLoading.value = true;
  try {
    await axios
      .post("https://deeigbo-server.onrender.com/translate", {
        text: text.value,
      })
      .then((response) => {
        translatedText.value = response.data?.translation;
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
  isLoading.value = false;
};

//  clear the text from the input field
const clear = () => {
  text.value = "";
  translatedText.value = "";
};
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
        @click="translateText"
        v-if="translatedText.length <= 0"
      >
        {{ isLoading ? "..." : "Translate" }}
      </button>
      <button
        class="rounded-lg text-sm md:text-xl p-2 md:p-4 font-semibold outline-none bg-black text-white"
        :disabled="text.length <= 0"
        @click="clear"
        v-else
      >
        Clear
      </button>
    </div>
    <!-- where the question will show -->
    <div
      v-if="text.length > 0"
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
      v-if="translatedText.length > 0"
      class="flex items-center justify-end md:w-5xl w-full mx-auto mt-4 gap-2"
    >
      <div
        :class="[
          'bg-gray-200 md:max-w-3xl md:w-3xl w-full rounded-lg',
          text.length === 0 ? 'p-0' : 'p-2',
        ]"
      >
        <p class="md:max-w-3xl md:w-3xl w-full">
          {{ translatedText }}
        </p>
      </div>
      <PhRobot :size="40" />
    </div>
  </section>
</template>
