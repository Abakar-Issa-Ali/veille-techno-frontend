<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{ add: [title: string] }>()
const title = ref('')

function submit() {
  const value = title.value.trim()
  if (!value) return
  emit('add', value)
  title.value = ''
}
</script>

<template>
  <form
    class="flex w-72 shrink-0 flex-col gap-2 rounded-lg border-2 border-dashed border-slate-300 p-3 print:hidden"
    @submit.prevent="submit"
  >
    <label for="new-column" class="sr-only">New Column</label>
    <input
      id="new-column"
      v-model="title"
      maxlength="50"
      placeholder="Title of the column"
      class="rounded border border-slate-300 px-2 py-1"
    />
    <button
      type="submit"
      :disabled="!title.trim()"
      class="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700 disabled:opacity-50"
    >
      + Add a column
    </button>
  </form>
</template>