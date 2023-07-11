<template>
  <div class="wrapper">
    <br />
    <SearchBar
      :allShows="allShows"
      @suggestionSelected="onShowSuggestionSelecction"
    >
    </SearchBar>
    <br />
    <!-- <GenereList :genereList="loadAllGenere"></GenereList> -->
    <br />
    <ShowList :allShows="allShows"> </ShowList>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { type T_Show } from "../types/show.types";
import ShowList from "../components/ShowList/ShowList.vue";
import SearchBar from "../components/SearchBar/SearchBar.vue";
import GenereList from "../components/GenreList/GenereList.vue";
import { getAllStreamingsNow } from "../services/ExternalStreamingServices";

const allShows = ref<T_Show[] | []>([]);
const reserveAllShows = ref<T_Show[] | []>([]);
const genereList = ref<string[]>([]);

const LoadAllShowsFromExternalAPI = async () => {
  const data = await getAllStreamingsNow();
  allShows.value = data || [];
  reserveAllShows.value = data || [];
};

onMounted(() => {
  LoadAllShowsFromExternalAPI();
});

/** */
const loadAllGenere = computed(() => {
  const allGenereList: string[] = [];
  reserveAllShows.value.map((show: T_Show) => {
    show.genres.map((gene) => {
      allGenereList.push(gene);
    });
  });
  return [...new Set(allGenereList)];
});

/** */
const onShowSuggestionSelecction = (show: T_Show | null) => {
  if (show) {
    allShows.value = [show];
    return;
  }
  allShows.value = reserveAllShows.value;
};
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
