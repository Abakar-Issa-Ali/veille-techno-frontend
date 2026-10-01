import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/types/kanban'
import { loadBoard, saveBoard } from '@/services/boardStorage'

export const useBoardStore = defineStore('board', () => {
  const columns = ref(loadBoard())

  watch(columns, (value) => saveBoard(value), { deep: true })

  function findColumn(columnId: string) {
    return columns.value.find((c) => c.id === columnId)
  }

  function addColumn(title: string) {
    columns.value.push({ id: crypto.randomUUID(), title, tasks: [] })
  }

  function addTask(columnId: string, title: string) {
    findColumn(columnId)?.tasks.push({
      id: crypto.randomUUID(),
      title,
      description: '',
      createdAt: new Date().toISOString(),
    })
  }

  function updateTask(
    columnId: string,
    taskId: string,
    changes: Partial<Pick<Task, 'title' | 'description'>>,
  ) {
    const task = findColumn(columnId)?.tasks.find((t) => t.id === taskId)
    if (task) Object.assign(task, changes)
  }

  function deleteTask(columnId: string, taskId: string) {
    const column = findColumn(columnId)
    if (column) column.tasks = column.tasks.filter((t) => t.id !== taskId)
  }

  return { columns, addColumn, addTask, updateTask, deleteTask }
})