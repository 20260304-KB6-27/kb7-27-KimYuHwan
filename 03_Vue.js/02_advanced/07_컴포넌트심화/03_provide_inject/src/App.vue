<template>
  <SongList :songs="songs" />
</template>

<script setup>
import { provide, ref, computed } from 'vue';
import SongList from './components/SongList.vue';

const songs = ref([
  { id: 1, title: 'Blueming', done: true },
  { id: 2, title: 'Dynamite', done: true },
  { id: 3, title: 'Lovesick Girls', done: false },
  { id: 4, title: '마리아(Maria)', done: false },
]);

let nextId = 5;

function addSong(title) {
  const t = String(title ?? '').trim();
  if (!t) return;
  songs.value.push({ id: nextId++, title: t, done: false });
}

function toggleSongDone(id) {
  const song = songs.value.find((s) => s.id === id);
  if (song) song.done = !song.done;
}

const doneCount = computed(() => songs.value.filter((s) => s.done).length);

provide('icons', { checked: 'far fa-check-circle', unchecked: 'far fa-circle' });
provide('doneCount', doneCount);
provide('addSong', addSong);
provide('toggleSongDone', toggleSongDone);
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
