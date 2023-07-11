<template>
  <main class="main" v-if="showInformation">
    <div class="show_card" id="bright">
      <div class="info_section">
        <div class="movie_header">
          <img class="locandina" :src="`${showInformation?.image.original}`" />
          <h1>{{ showInformation.name }}</h1>
          <h4>{{ showInformation.language }}</h4>
          <p>{{ showInformation?.runtime?.average }}</p>
          <p>{{ showInformation.genres?.join() }}</p>
        </div>
        <div class="movie_desc">
          <div class="text" v-html="showInformation?.summary" />
        </div>
      </div>
      <div
        class="blur_back"
        :style="{
          'background-image': 'url(' + showInformation?.image?.original + ')',
        }"
      />
    </div>
    <NoShowInformationAvailable
      v-if="showInformation?.name == ''"
    ></NoShowInformationAvailable>
  </main>
</template>
<script lang="ts" setup>
import NoShowInformationAvailable from "../NoShowInformationAvailable/NoShowInformationAvailable.vue";
import type { T_Show } from "../../types/show.types";

const props = defineProps<{ showInformation: T_Show | null }>();
</script>
<style scoped>
img {
  max-width: 100px;
  max-height: 100px;
}

.show_card {
  position: relative;
  display: block;
  width: 800px;
  height: auto;
  margin: 80px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
}

.show_card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}

.info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}

.info_section {
  position: relative;
  padding: 25px;
  height: 40%;
}

h1 {
  color: var( --vt-c-black);
  font-weight: 400;
}

h4 {
  color: #555;
  font-weight: 400;
}

.locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}

.movie_desc {
  padding: 25px;
  height: 50%;
}

.show_card .info_section .movie_desc .text {
  color: #545454;
}

.movie_social {
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
}

.blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
}

@media screen and (min-width: 768px) {
  .movie_header {
    width: 65%;
  }

  .movie_desc {
    width: 50%;
  }

  .info_section {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }

  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
  }
}

@media screen and (max-width: 768px) {
  .show_card {
    width: 95%;
    margin: 0 auto;
    min-height: 350px;
    height: auto;
  }

  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }

  .movie_header {
    width: 100%;
    margin-top: 85px;
  }

  .movie_desc {
    width: 100%;
  }

  .info_section {
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    display: inline-grid;
  }
}
</style>
