<template>
  <h2>Episodes</h2>
  <div class="scrollmenu">
    <div class="container" v-for="(episode, index) in episodeList" :key="index">
      <div>
        <img :src="`${episode.image?.original}`" fluid alt="Responsive image" />
        <div class="show-title">
          {{ episode.name }}
        </div>
        <div class="show-subtitle">
          Season{{ episode.season }} | {{ episode.runtime }} Minutes
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type T_EPISODE } from "../../types/show.types";
const props = defineProps<{ episodeList: T_EPISODE[] }>();
</script>
<style scoped lang="scss">
.scrollmenu {
  overflow: auto;
  white-space: nowrap;
  width: auto;
  height: auto;
  margin: 80px auto;
}
img {
  max-width: 200px;
  max-height: 150px;
}
.container {
  display: inline-flex;
  flex-direction: row;
  width: auto;
  margin-left: 10px;
  font-size: 14px;
}

.show-title {
  font-weight: bold;
  font-size: 14px;
}

.show-subtitle {
  font-size: 11px;
  background: #ffc426;
}

@media screen and (max-width: 768px) {
  .scrollmenu {
    overflow: auto;
    white-space: nowrap;
    width: auto;
    height: auto;
    min-height: 200px;
    margin: 10px auto;
  }
}
</style>
