import type { T_External_Streaming_Service_Config } from "../types/externalStreamingService.types";

export const EXTERNAL_STREAMING_SERVICE_CONFIGURATION: T_External_Streaming_Service_Config =
  {
    baseEndpoint: "https://api.tvmaze.com/",
    showsEndpoint: "shows",
    searchEndpoint: "singlesearch/",
    episodeSearchEndpoint: "episodes",
  };
