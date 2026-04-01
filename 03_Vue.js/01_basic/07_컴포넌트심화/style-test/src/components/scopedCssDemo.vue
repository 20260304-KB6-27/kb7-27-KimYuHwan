<template>
  <div class="scoped-css-demo-root">
    <!-- scoped: 이 컴포넌트에만 data-v-해시가 붙어 같은 클래스명도 충돌 안 함 -->
    <h2>2. scoped CSS</h2>
    <div class="box global-style">
      <div class="scoped-aqua-panel">
        <p class="scoped-sample">Scoped CSS 가 적용된 박스입니다.</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.scoped-css-demo-root {
  margin-top: 0.5rem;
}

.scoped-aqua-panel {
  background-color: aqua;
  border: 2px solid blue;
  border-radius: 8px;
  padding: 12px;
}

.scoped-sample {
  margin: 0;
  color: #1a365d;
  font-weight: 600;
}
</style>
