<template>
  <div>
    <h1>레이테만 해전</h1>
    <div>{{ mountedTime }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineOptions({ name: 'LeyteGulfTab' });

const mountedTime = ref('');

onMounted(() => {
  mountedTime.value = new Date().toTimeString();
});
</script>

<style scoped></style>
