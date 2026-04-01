<template>
  <div>
    <h1>v-model 테스트</h1>
    <hr />
    <BaseInput v-model="modelValue" label="닉네임" placeholder="닉네임을 입력하세요" />
    <BaseInput v-model="lastName" label="성" placeholder="성을 입력하세요" />
    <BaseInput v-model="firstName" label="이름" placeholder="이름을 입력하세요" />

    <p>
      닉네임: <strong>{{ modelValue }}</strong>
    </p>
    <p>
      전체이름: <strong>{{ lastName }} {{ firstName }}</strong>
    </p>
  </div>
</template>

<script setup>
import BaseInput from './components/BaseInput.vue';
import { ref } from 'vue';

const modelValue = ref('');
const lastName = ref('');
const firstName = ref('');
</script>

<style scoped></style>
