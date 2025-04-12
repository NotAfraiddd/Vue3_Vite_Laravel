<!-- Dashboard.vue -->
<template>
  <AppLayout>
    <template #header>
      <h1 class="text-2xl font-bold">Dashboard Header</h1>
    </template>

    <template #sidebar>
      <div class="sidebar-content">
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
      </div>
    </template>

    <template #default>
      <h2>Welcome to the Dashboard!</h2>
      <p>This is the main content area.</p>
    </template>
  </AppLayout>
</template>

<script setup lang="ts">
  import AppLayout from './AppLayout.vue';
</script>

<style scoped>
  .sidebar-content {
    padding: 10px;
  }
</style>
