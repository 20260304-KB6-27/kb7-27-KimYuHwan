<template>
  <li class="song-row" @click="toggleSongDone(song.id)">
    <i :class="song.done ? icons.checked : icons.unchecked"></i>
    {{ song.title }}
  </li>
</template>

<script setup>
import { inject } from 'vue';

defineProps(['song']);

const icons = inject('icons');
const toggleSongDone = inject('toggleSongDone');
</script>

<style scoped>
.song-row {
  cursor: pointer;
}
</style>
