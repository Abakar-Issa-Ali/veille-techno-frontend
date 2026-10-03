<script setup lang="ts">
import type { Task } from '@/types/kanban'

defineProps<{ task: Task }>()
</script>

<template>
  <li class="rounded bg-white p-2 shadow-sm">
    <p class="break-words text-sm text-slate-800">{{ task.title }}</p>
  </li>
</template>