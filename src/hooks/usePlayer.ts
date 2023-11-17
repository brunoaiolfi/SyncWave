import { useContext } from "react";
import { PlayerContext } from "../context/playerContext";

export function usePlayer() {
    return useContext(PlayerContext)
}