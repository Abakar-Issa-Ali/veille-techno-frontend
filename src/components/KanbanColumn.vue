<script setup lang="ts">
import type { Column } from '@/types/kanban'

defineProps<{ column: Column }>()
</script>

<template>
  <section class="flex w-72 shrink-0 flex-col rounded-lg bg-slate-100 p-3">
    <header class="mb-3 flex items-center justify-between">
      <h2 class="font-semibold text-slate-800">{{ column.title }}</h2>
      <span class="rounded-full bg-slate-200 px-2 text-xs text-slate-600">
        {{ column.tasks.length }}
      </span>
    </header>

    <ul class="flex flex-col gap-2">
      <li
        v-for="task in column.tasks"
        :key="task.id"
        class="rounded bg-white p-2 shadow-sm"
      >
        {{ task.title }}
      </li>
    </ul>
  </section>
</template>