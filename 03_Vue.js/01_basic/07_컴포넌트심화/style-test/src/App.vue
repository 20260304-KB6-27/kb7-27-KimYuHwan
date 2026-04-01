<script setup>
// App scoped 스타일: 이 컴포넌트 레이아웃용. 전역 스타일은 main.css
import GlobalCSSdemo from './components/GlobalCSSdemo.vue';
import scopedCssDemo from './components/scopedCssDemo.vue';
import CssModuleDemo from './components/CssModuleDemo.vue';
</script>

<template>
  <div class="app-layout">
    <div class="container">
      <h1>Vue CSS 스타일 방법</h1>
      <GlobalCSSdemo />
    </div>
    <div class="app-root">
      <h1>scoped / CSS 모듈</h1>
      <scopedCssDemo />
      <CssModuleDemo />
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.app-root {
  padding: 1rem;
}
</style>
