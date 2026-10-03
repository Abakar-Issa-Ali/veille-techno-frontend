<script setup lang="ts">
import type { Column } from '@/types/kanban'
import TaskCard from './TaskCard.vue'
import AddTaskForm from './AddTaskForm.vue'

defineProps<{ column: Column }>()
const emit = defineEmits<{ 'add-task': [title: string] }>()
</script>

<template>
  <section class="flex max-h-full w-72 shrink-0 flex-col rounded-lg bg-slate-100 p-3">
    <header class="mb-3 flex items-center justify-between">
      <h2 class="font-semibold text-slate-800">{{ column.title }}</h2>
      <span class="rounded-full bg-slate-200 px-2 text-xs text-slate-600">
        {{ column.tasks.length }}
      </span>
    </header>

    <ul class="flex min-h-0 flex-col gap-2 overflow-y-auto">
      <TaskCard v-for="task in column.tasks" :key="task.id" :task="task" />
    </ul>

    <AddTaskForm @add="emit('add-task', $event)" />
  </section>
</template>