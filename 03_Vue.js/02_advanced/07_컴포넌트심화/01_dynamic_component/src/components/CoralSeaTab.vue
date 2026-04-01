<template>
  <div>
    <h1>산호해 해전</h1>
    <div>{{ mountedTime }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineOptions({ name: 'CoralSeaTab' });

const mountedTime = ref('');

onMounted(() => {
  mountedTime.value = new Date().toTimeString();
});
</script>

<style scoped></style>
