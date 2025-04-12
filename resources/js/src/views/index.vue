<template>
  <div class="bg-gray-200 p-4">
    <h1 class="text-3xl text-center mb-4">App</h1>
    <AppLayout>
      <template #sidebar>
        <SidebarMenu />
      </template>
    </AppLayout>
  </div>
</template>

<script setup>
  import AppLayout from '@/layouts/AppLayout.vue';
  import { ref, onMounted } from 'vue';
  import SidebarMenu from './SidebarMenu.vue';
  const users = ref([]);
</script>

<style scoped lang="scss"></style>
