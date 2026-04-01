<template>
  <div>
    <input v-model="checked" type="checkbox" />
    <span
      :style="{
        color: checked ? 'blue' : 'gray',
        textDecoration: 'underline',
      }"
    >
      <slot>
        <i>{{ label }}</i>
      </slot>
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
