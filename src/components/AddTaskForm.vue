<script setup lang="ts">
import { nextTick, ref, useTemplateRef } from 'vue'

const emit = defineEmits<{ add: [title: string] }>()

const isOpen = ref(false)
const title = ref('')
const input = useTemplateRef<HTMLInputElement>('input')

async function open() {
  isOpen.value = true
  await nextTick()
  input.value?.focus()
}

function close() {
  isOpen.value = false
  title.value = ''
}

function submit() {
  const value = title.value.trim()
  if (!value) return
  emit('add', value)
  title.value = ''
  input.value?.focus()
}
</script>

<template>
  <form v-if="isOpen" class="mt-2 flex flex-col gap-2 print:hidden" @submit.prevent="submit">
    <input
      ref="input"
      v-model="title"
      maxlength="100"
      placeholder="Title of the task"
      aria-label="Title of the task"
      class="rounded border border-slate-300 bg-white px-2 py-1 text-sm"
      @keydown.esc="close"
    />
    <div class="flex gap-2">
      <button
        type="submit"
        :disabled="!title.trim()"
        class="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700 disabled:opacity-50 print:hidden"
      >
        Add
      </button>
      <button type="button" class="px-2 text-sm text-slate-600 hover:text-slate-900 print:hidden" @click="close">
        Cancel
      </button>
    </div>
  </form>

  <button
    v-else
    type="button"
    class="mt-2 rounded px-2 py-1 text-left text-sm text-slate-600 hover:bg-slate-200 print:hidden"
    @click="open"
  >
    + Add a task
  </button>
</template>