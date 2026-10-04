<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from '@/types/kanban'
import { useBoardStore } from '@/stores/board'
import KanbanColumn from './KanbanColumn.vue'
import AddColumnForm from './AddColumnForm.vue'
import TaskModal from './TaskModal.vue'

const board = useBoardStore()
const selected = ref<{ columnId: string; task: Task } | null>(null)

function saveTask(changes: { title: string; description: string }) {
  if (!selected.value) return
  board.updateTask(selected.value.columnId, selected.value.task.id, changes)
  selected.value = null
}

function deleteTask() {
  if (!selected.value) return
  board.deleteTask(selected.value.columnId, selected.value.task.id)
  selected.value = null
}
</script>

<template>
  <main class="relative flex items-start gap-4 overflow-x-auto p-4 print:flex-wrap print:overflow-visible">
    <KanbanColumn
      v-for="column in board.columns"
      :key="column.id"
      :column="column"
      @add-task="board.addTask(column.id, $event)"
      @open-task="selected = { columnId: column.id, task: $event }"
    />
    <AddColumnForm @add="board.addColumn" />

    <TaskModal
      v-if="selected"
      :task="selected.task"
      @save="saveTask"
      @delete="deleteTask"
      @close="selected = null"
    />
  </main>
</template>