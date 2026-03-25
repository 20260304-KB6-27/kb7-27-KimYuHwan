<template>
  <li><input type="checkbox" v-model="checked" />옵션1</li>
</template>

<!-- <script>
export default {
  name: 'CheckboxItem',
  setup() {
    return {
      checked: false,
    };
  },
};
</script> -->

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
<style lang="scss"></style>
