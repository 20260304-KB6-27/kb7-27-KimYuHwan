<template>
  <div>
    <div>
      <input v-model="newTitle" type="text" placeholder="곡 제목" @keyup.enter="onAdd" />
      <button type="button" @click="onAdd">추가</button>
    </div>
    <ul>
      <SongListItem v-for="s in songs" :key="s.id" :song="s" />
    </ul>
    <div>체크된 곡 수 : {{ doneCount }}</div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import SongListItem from './SongListItem.vue';

defineProps(['songs']);

const doneCount = inject('doneCount');
const addSong = inject('addSong');

const newTitle = ref('');

function onAdd() {
  addSong(newTitle.value);
  newTitle.value = '';
}
</script>

<style scoped></style>
