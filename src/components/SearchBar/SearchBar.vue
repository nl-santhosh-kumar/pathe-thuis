<template>
  <div class="wrapper">
    <div class="search">
      <input
        class="search-input"
        type="search"
        v-model="keyword.searchKeyword"
        @input="onChange(keyword.searchKeyword)"
        placeholder="Search"
      />
    </div>
    <div class="fill" v-if="keyword.searchKeyword !== '' && filterShows.length">
      <ul class="autocomplete-items" v-if="allShows.length > 1">
        <li
          v-for="show in filterShows"
          :key="show.name"
          @click="onShowSuggestionSelection(show)"
        >
          {{ show.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive } from "vue";
import type { T_Show } from "../../types/show.types";
const props = defineProps<{ allShows: T_Show[] | [] }>();
const keyword = reactive({
  searchKeyword: "",
});

const onChange = (keyword: string) => {
  if (keyword === "") {
    emitEvents("suggestionSelected", null);
  }
};

/** Let the parent component know that, a suggestion
is chosen by the user
*/
const emitEvents = defineEmits<{
  (e: "suggestionSelected", val: T_Show | null): void;
}>();

const filterShows = computed(() => {
  if (keyword.searchKeyword === "") {
    return [];
  }
  return props.allShows.filter((suggestion: T_Show) => {
    return (
      suggestion.name
        .toLowerCase()
        .indexOf(keyword.searchKeyword.toLowerCase()) >= 0
    );
  });
});

/**
On selection of a show name */
const onShowSuggestionSelection = (selectedShow: T_Show) => {
  keyword.searchKeyword = selectedShow.name;
  emitEvents("suggestionSelected", selectedShow);
};
</script>
<style scoped lang="scss">
.search-input {
  width: 100%;
  border: 2px solid #ffc426;
  padding: 5px;
  height: 40px;
  border-radius: 5px 5px 5px 5px;
  outline: none;
}

.autocomplete-items {
  position: fixed;
  z-index: 1;
  background-color: #e9e9e9;
  border-radius: 5px;
  padding: 10px;
  max-height: 500px;
  min-width: 400px;
  overflow-y: scroll;
  border: 1px solid #ffc426;
  border-top: none;
}
.autocomplete-items li {
  cursor: pointer;
  list-style-type: none;
  border-bottom: 1px solid #ffc426;
}
</style>
