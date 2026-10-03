<script setup lang="ts">
import BoardView from '@/components/BoardView.vue'
</script>

<template>
  <div class="flex h-screen flex-col bg-white">
    <header class="shrink-0 border-b border-slate-200 px-4 py-3">
      <h1 class="text-xl font-bold text-slate-800">Board</h1>
    </header>
    <BoardView class="min-h-0 flex-1" />
  </div>
</template>