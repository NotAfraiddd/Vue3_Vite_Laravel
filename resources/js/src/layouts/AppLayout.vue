<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-blue-600 text-white p-4">
      <slot name="header">
        <h1 class="text-xl font-bold">Default Header</h1>
      </slot>
    </header>

    <aside v-if="$slots.sidebar" class="bg-gray-100 p-4 w-64">
      <slot name="sidebar" />
    </aside>

    <main class="flex-1 p-6">
      <slot />
    </main>

    <footer class="bg-gray-200 text-center text-sm py-2">
      <slot name="footer"> &copy; 2025 My App </slot>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
