import axios from "axios";
import { EXTERNAL_STREAMING_SERVICE_CONFIGURATION } from "./TVMazeConfiguration";

/*
 * A function to get all available shows
 * returns a list of shows
 */
export async function getAllStreamingsNow() {
  const { data = null } = await axios.get(
    `${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.baseEndpoint}${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.showsEndpoint}`
  );
  return data;
}
/**
 * A function to get information about Sepecific show based on the id
 * return an object with show information
 * @param {number} id
 */
export async function getShowInformation(id: string | number) {
  const { data = null } = await axios.get(
    `${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.baseEndpoint}${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.showsEndpoint}/${id}`
  );
  return data;
}

/**
 * A function to search for list of shows matching the keyword
 * returns a list of shows matching the keyword
 * @param {string} keyword
 */
export async function searchShow(keyword = "") {
  const { data = null } = await axios.get(
    `${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.baseEndpoint}${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.showsEndpoint}?q=${keyword}`
  );
  return data;
}

/**
 * A function to return a spefic show matching a keyword (title)
 * returns a spefic show information
 * @param {string} keyword
 */
export async function singleSearch(keyword = "") {
  const { data = null } = await axios.get(
    `${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.baseEndpoint}${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.searchEndpoint}${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.showsEndpoint}?q=${keyword}`
  );
  return data;
}

/**
 * A function to get the list of episodes of a show by its id
 * returns a list of episodes of a show
 * @param {number} showId
 */
export async function getEpisodeInformation(showId: string | number) {
  const { data = null } = await axios.get(
    `${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.baseEndpoint}${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.showsEndpoint}/${showId}/${EXTERNAL_STREAMING_SERVICE_CONFIGURATION.episodeSearchEndpoint}`
  );
  return data;
}
