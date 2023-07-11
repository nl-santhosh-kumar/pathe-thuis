<template>
  <div class="scrollmenu">
    <div class="chip" v-for="(genere, index) in genereList" :key="index">
      <div class="chip-content">{{ genere }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ genereList: string[] }>();
</script>
<style scoped lang="scss">
.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

.chip {
  display: inline-flex;
  flex-direction: row;
  background-color: var(--vt-c-yellow);
  cursor: default;
  height: 36px;
  outline: none;
  margin: 10px;
  white-space: nowrap;
  align-items: center;
  border-radius: 16px;
  vertical-align: middle;
  text-decoration: none;
  justify-content: center;
}
.chip-content {
  cursor: inherit;
  display: flex;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  padding-left: 12px;
  padding-right: 12px;
}
</style>
