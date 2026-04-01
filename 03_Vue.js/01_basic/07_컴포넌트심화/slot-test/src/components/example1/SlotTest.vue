<template>
  <CheckBox2>
    <h3>당신이 경험한 프론트엔드 기술은?(Slot 사용 O — 라벨 영역을 slot으로 열어둠)</h3>
    <CheckBox2
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      v-model="item.checked"
      :label="item.label"
    />
    <p>asdf</p>
  </CheckBox2>
</template>

<script setup>
import { ref } from 'vue';
import CheckBox2 from './CheckBox2.vue';

const items = ref([
  { id: 'V', checked: true, label: 'Vue' },
  { id: 'A', checked: false, label: 'Angular' },
  { id: 'R', checked: false, label: 'React' },
  { id: 'S', checked: false, label: 'Svelte' },
]);
</script>
