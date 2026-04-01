<template>
  <div>
    <input v-model="checked" type="checkbox" />

    <span v-if="checked" style="color: blue; text-decoration: underline">
      <i>{{ label }}</i>
    </span>
    <span v-else style="color: gray; text-decoration: underline">
      <i>{{ label }}</i>
    </span>
  </div>
</template>

<script setup>
defineProps({
  id: { type: [String, Number], required: true },
  label: { type: String, required: true },
});
const checked = defineModel({ type: Boolean, required: true });
</script>

<style scoped></style>
