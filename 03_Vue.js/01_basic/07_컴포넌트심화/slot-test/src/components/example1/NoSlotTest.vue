<template>
  <div>
    <h3>당신이 경험한 프론트엔드 기술은?(Slot 사용 x)</h3>
    <CheckBox1
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      v-model="item.checked"
      :label="item.label"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CheckBox1 from './CheckBox1.vue';

const items = ref([
  { id: 'V', checked: true, label: 'Vue' },
  { id: 'A', checked: false, label: 'Angular' },
  { id: 'R', checked: false, label: 'React' },
  { id: 'S', checked: false, label: 'Svelte' },
]);
</script>
