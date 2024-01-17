import { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs";

export type Playlist = {
    id: string,
    name: string,
    description: string,
    songs: Song[],
    createdAt: Date,
    updatedAt: Date,
}