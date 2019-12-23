/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { combineReducers } from "redux";
import playlists from "./playlists";
import playlistDetails from "./playlistDetails";

export default combineReducers({
  playlists,
  playlistDetails
});
