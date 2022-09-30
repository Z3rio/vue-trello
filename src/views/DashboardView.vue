<template>
  <DashboardPage :user="user" />
</template>

<script setup lang="ts">
import DashboardPage from "../components/pages/DashboardPage.vue";

defineProps<{
  user: Object;
}>();
</script>
