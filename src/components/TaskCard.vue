<script setup lang="ts">
import type { Task } from '@/types/kanban'

defineProps<{ task: Task }>()
defineEmits<{ open: [] }>()
</script>

<template>
  <li>
    <button
      type="button"
      class="w-full rounded bg-white p-2 text-left shadow-sm hover:ring-2 hover:ring-blue-300"
      @click="$emit('open')"
    >
      <p class="break-words text-sm text-slate-800">{{ task.title }}</p>
      <p v-if="task.description" class="mt-1 line-clamp-2 text-xs text-slate-500">
        {{ task.description }}
      </p>
    </button>
  </li>
</template>