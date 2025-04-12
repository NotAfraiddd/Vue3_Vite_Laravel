<template>
  <component :is="layoutComponent">
    <router-view v-slot="{ Component, ...slots }">
      <component :is="Component" v-bind="slots" />
    </router-view>
  </component>
</template>

<script setup lang="ts">
  import { computed, defineAsyncComponent } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const layoutComponent = computed(() => {
    const layout = (route.meta.layout as string) || 'app';

    let layoutName: string;

    switch (layout) {
      case 'auth':
        layoutName = 'AuthLayout';
        break;
      case 'admin':
        layoutName = 'AdminLayout';
        break;
      default:
        layoutName = 'AppLayout';
        break;
    }

    return defineAsyncComponent(() => import(`@/layouts/${layoutName}.vue`));
  });
</script>
