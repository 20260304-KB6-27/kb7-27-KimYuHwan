<template>
  <div>
    <h1>동적 컴포넌트</h1>
    <hr />
    <h1>태평양 전쟁의 해전</h1>
    <ul>
      <li v-for="tab in tabs" :key="tab.id">
        <a @click="changeTab(tab.id)">{{ tab.label }}</a>
      </li>
    </ul>
    <!-- 컴포넌트를 캐싱하여 성능 상 이득 -->
    <KeepAlive :include="cachedTabNames">
      <component :is="tabComponents[currentTab]" />
    </KeepAlive>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CoralSeaTab from './components/CoralSeaTab.vue';
import MidwayTab from './components/MidwayTab.vue';
import LeyteGulfTab from './components/LeyteGulfTab.vue';
// 동적 컴포넌트
// - is 속성을 사용하여 런타임에 렌더링할 컴포넌트를 동적으로 바꿀수 있다
// - Tab UI/ 스텝 UI 등에도 적용시켜서 사용가능
const tabComponents = {
  CoralSeaTab,
  MidwayTab,
  LeyteGulfTab,
};

const tabs = ref([
  { id: 'CoralSeaTab', label: '산호해 해전' },
  { id: 'MidwayTab', label: '미드웨이 해전' },
  { id: 'LeyteGulfTab', label: '레이테만 해전' },
]);

const cachedTabNames = tabs.value.map((t) => t.id);

const currentTab = ref(tabs.value[0].id);

function changeTab(tabId) {
  currentTab.value = tabId;
}
</script>

<style scoped></style>
