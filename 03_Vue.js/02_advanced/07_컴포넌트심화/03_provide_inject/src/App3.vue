<template>
  <div>
    <h2>비동기 컴포넌트</h2>
    <Async> </Async>
  </div>
</template>

<script setup>
// 옵션 없이 사용
// import { defineAsyncComponent } from 'vue';
// const Async = defineAsyncComponent(() => import('./components/Async.vue'));
// defineAsyncComponent 옵션 사용시점
// - 초기 로딩 속도 개선이 ㅍ룡할때
// - 무겁거나(차트, 에디터) 자주 사용하지 않는 컴포넌트
// 옵션 사용
import LoadingComp from './components/LoadingComp.vue';
import ErrorComp from './components/ErrorComp.vue';
import { defineAsyncComponent } from 'vue';
const Async = defineAsyncComponent({
  loader: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        import('./components/Async.vue');
      }, 3000);
    }),
  loadingComponent: LoadingComp, // delay 이후 로딩중에 표시
  errorCompoenent: ErrorComp, // timeout 초과 또는 오류 발생시 표시
  delay: 200, // 200ms 지나면 LoadingComp 표시
  timeout: 3000, // 3초 지나면 ErrorComp 표시
});
</script>

<style scoped></style>
