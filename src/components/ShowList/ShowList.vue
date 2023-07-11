<template>
  <div class="wrapper">
    <div
      class="container"
      v-for="(showInformation, index) in allShows"
      :key="index"
    >
      <div
        class="content"
        v-if="showInformation"
        @click="onShowSelection(showInformation.id)"
      >
        <img
          :src="`${showInformation.image?.original}`"
          fluid
          alt="Responsive image"
        />
        <div class="show-title">
          {{ showInformation.name }}
        </div>
        <div class="show-subtitle">
          {{ showInformation.language }} | {{ showInformation.runtime }} Minutes
          |
          {{ showInformation.genres?.join() }}
        </div>
      </div>
    </div>
  </div>
  <div v-if="allShows.length === 0">
    <NoShowAvailable></NoShowAvailable>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { toRefs } from "vue";
import NoShowAvailable from "../NoShowAvailable/NoShowAvailable.vue";
import type { T_Show } from "../../types/show.types";

const props = defineProps<{ allShows: T_Show[] | [] }>();
const router = useRouter();

const onShowSelection = (showID: number) => {
  router.push({ name: "show", params: { id: showID } });
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.container {
  flex: auto;
  cursor: pointer;
}

.content {
  background-color: white;
  padding: 10px;
  width: 200px;
}

img {
  max-width: 200px;
  max-height: 250px;
}

.heading-wrapper {
  margin-top: 20px;
  margin-left: 40px;
  font-weight: bold;
  font-size: 14px;
}

.show-title {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  background: #ffc426;
  padding-left: 10px;
}

.show-subtitle {
  font-size: 10px;
  max-width: 250px;
}

@media screen and (max-width: 961px) {
  .wrapper {
    margin: 0 auto;
  }
  .container {
    float: left;
    width: 30%;
    cursor: pointer;
  }
}

@media screen and (max-width: 641px) {
  .wrapper {
    margin: 0 auto;
  }
  .container {
    float: left;
    width: 50%;
    cursor: pointer;
  }
}
</style>
