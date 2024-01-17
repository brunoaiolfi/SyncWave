import { useContext } from "react";
import { PlaylistContext } from "../context/playlistContext";

export function usePlaylist() {
    return useContext(PlaylistContext)
}