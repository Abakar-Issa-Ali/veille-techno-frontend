<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import type { Task } from '@/types/kanban'

const props = defineProps<{ task: Task }>()
const emit = defineEmits<{
  save: [changes: { title: string; description: string }]
  delete: []
  close: []
}>()

const title = ref(props.task.title)
const description = ref(props.task.description)
const dialog = useTemplateRef<HTMLDialogElement>('dialog')

onMounted(() => dialog.value?.showModal())

function save() {
  const value = title.value.trim()
  if (!value) return
  emit('save', { title: value, description: description.value.trim() })
}

function remove() {
  if (confirm('Supprimer cette tâche ?')) emit('delete')
}
</script>

<template>
  <dialog
    ref="dialog"
    class="m-auto w-full max-w-md rounded-lg p-0 backdrop:bg-black/40"
    @close="emit('close')"
  >
    <form class="flex flex-col gap-3 p-5" @submit.prevent="save">
      <h2 class="text-lg font-semibold text-slate-800">Modify task</h2>

      <label class="flex flex-col gap-1 text-sm text-slate-700">
        Titre
        <input v-model="title" maxlength="100" class="rounded border border-slate-300 px-2 py-1" />
      </label>

      <label class="flex flex-col gap-1 text-sm text-slate-700">
        Description
        <textarea
          v-model="description"
          rows="5"
          maxlength="1000"
          class="resize-y rounded border border-slate-300 px-2 py-1"
        />
      </label>

      <div class="mt-2 flex items-center justify-between">
        <button type="button" class="text-sm text-red-600 hover:underline" @click="remove">
          Delete
        </button>
        <div class="flex gap-2">
          <button type="button" class="px-3 py-1 text-sm text-slate-600" @click="dialog?.close()">
            Cancel
          </button>
          <button
            type="submit"
            :disabled="!title.trim()"
            class="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </dialog>
</template>