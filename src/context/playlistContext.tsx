import { createContext } from "react";
import { Playlist } from "../models/types/playlist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ALLPLAYLISTS } from "../global/constants/keys/playlists";
import { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs";

export interface PlaylistDTO {
    title: string;
    description?: string;
    musics: Song[]
}

interface IPlaylistProps {
    getAllPlaylists: () => Promise<Playlist[]>;
    createPlaylist: (playlist: PlaylistDTO) => Promise<Playlist[]>;
};

interface IPlaylistProvider {
    children: React.ReactNode;
}

export const PlaylistContext = createContext({} as IPlaylistProps);

export function PlaylistProvider({ children }: IPlaylistProvider) {

    async function getAllPlaylists() {
        const playlists: Playlist[] = JSON.parse(await AsyncStorage.getItem(ALLPLAYLISTS) || '[]')
        return playlists
    }

    async function createPlaylist(dto: PlaylistDTO) {
        const playlists: Playlist[] = JSON.parse(await AsyncStorage.getItem(ALLPLAYLISTS) || '[]')
        playlists.push({
            id: String(playlists.length + 1),
            name: dto.title,
            description: dto?.description ?? "",
            songs: dto.musics,
            updatedAt: new Date(),
            createdAt: new Date(),
        })

        await AsyncStorage.setItem(ALLPLAYLISTS, JSON.stringify(playlists))
        return playlists
    }

    return (
        <PlaylistContext.Provider
            value={{
                getAllPlaylists,
                createPlaylist
            }}
        >
            {children}
        </PlaylistContext.Provider>
    );
}