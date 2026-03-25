<template>
  <div class="app-root">
    <h2>App Component</h2>
    <hr />
    <ul>
      <CheckboxItem  v-for="idol in idols" :key="idol.id" :idol.name="idol/>
      <CheckboxItem />
      <CheckboxItem />
      <CheckboxItem />
    </ul>
  </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem.vue';
const idols = ref([
  { id: 1, name: "BTS", checked: true },
  { id: 2, name: "Black Pink", checked: false },
  { id: 3, name: "EXO", checked: false },
  { id: 4, name: "ITZY", checked: false },
]);
export default {
  name: 'App',
  components: { CheckboxItem },
};
</script>

<style scoped>
.app-root {
  padding: 1rem;
}
</style>
