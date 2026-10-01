import type { Column } from '@/types/kanban'

const STORAGE_KEY = 'kanban-board'

export function loadBoard(): Column[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveBoard(columns: Column[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(columns))
}