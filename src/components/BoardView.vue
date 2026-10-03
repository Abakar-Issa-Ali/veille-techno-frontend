<script setup lang="ts">
import { useBoardStore } from '@/stores/board'
import KanbanColumn from './KanbanColumn.vue'
import AddColumnForm from './AddColumnForm.vue'

const board = useBoardStore()
</script>

<template>
 <main class="relative flex items-start gap-4 overflow-x-auto p-4">
    <KanbanColumn
      v-for="column in board.columns"
      :key="column.id"
      :column="column"
      @add-task="board.addTask(column.id, $event)"
    />
    <AddColumnForm @add="board.addColumn" />
  </main>
</template>