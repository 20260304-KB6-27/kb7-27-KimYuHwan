<template>
  <div class="css-module-demo-root">
    <h2>3. CSS 모듈</h2>
    <!-- module 클래스는 :class="css.box" 처럼 JS 객체로 연결 -->
    <div :class="css.box">CSS 모듈이 적용된 박스입니다.</div>
  </div>
</template>
<!-- composition 방식 ->  -->
<script setup>
import { useCssModule } from 'vue';

const css = useCssModule();
</script>
<!--
module
- CSS 모듈은 클래스명 자체를 고유하게 바꾼다.

-->
<style module>
.box {
  background-color: greenyellow;
  border: 2px solid green;
  padding: 12px;
  border-radius: 8px;
  margin-top: 0.5rem;
}
</style>
