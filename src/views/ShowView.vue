<template>
  <div class="fill">
    <bread-crumb />
    <div class="main">
      <ShowInformation :showInformation="showInformation"></ShowInformation>
      <EpisodeList :episodeList="episodeInformation" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  getShowInformation,
  getEpisodeInformation,
} from "../services/ExternalStreamingServices";

import ShowInformation from "../components/ShowInformation/ShowInformation.vue";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb.vue";
import EpisodeList from "../components/EpisodeList/EpisodeList.vue";

import { type T_Show, type T_EPISODE } from "../types/show.types";
import { EMPTY_SHOW_OBJECT } from "../shared/util";

const route = useRoute();
const showInformation = ref<T_Show | null>(null);
const episodeInformation = ref<T_EPISODE[] | []>([]);

// show is loaded based on the show id passed as param
const showIDFromRouteInformation = route.params;
/**
 * Method to load show information from
 * external api
 */
const LoadShowInformationFromExternalAPI = async (showID: number | string) => {
  const data = await getShowInformation(showID);
  showInformation.value = data || null;
};

/**
 * LoadEpisode details based on show ID from External API
 */
const LoadEpisodeDetailsByShowID = async (showID: number | string) => {
  // lets load the episode information
  const episode = await getEpisodeInformation(showID);
  episodeInformation.value = [episode];
  const allEpisode: T_EPISODE[] = [];
  episode.forEach((episode: T_EPISODE) => {
    const { name, season, image, runtime } = episode;
    allEpisode.push({ name, season, image, runtime });
  });
  episodeInformation.value = allEpisode;
};

if (showIDFromRouteInformation) {
  LoadShowInformationFromExternalAPI(showIDFromRouteInformation.id.toString());
  LoadEpisodeDetailsByShowID(showIDFromRouteInformation.id.toString());
}
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
}
.main {
  max-width: 1000px;
  margin: auto;
}
img {
  width: 300px;
}

.fill {
  width: 100%;
}
</style>
