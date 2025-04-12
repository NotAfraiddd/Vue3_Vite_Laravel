<!-- SidebarMenu.vue -->
<template>
  <div class="sidebar-menu">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Settings</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .sidebar-menu {
    background-color: #f4f4f4;
    padding: 10px;
  }

  .sidebar-menu ul {
    list-style: none;
    padding: 0;
  }

  .sidebar-menu li {
    padding: 10px;
  }

  .sidebar-menu a {
    text-decoration: none;
    color: #333;
  }
</style>
