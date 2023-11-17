import { createContext, useState } from "react";
import { EnumPlayerAction } from "../models/enums/player/Player";
import TrackPlayer from 'react-native-track-player';
import { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs";

interface IPlayerProps {
    handleAction: (action: EnumPlayerAction) => Promise<void>;
    handleSelectMusicToPlay: (music: Song) => Promise<void>;
    musicSelected: Song | null;
};

interface IPlayerProvider {
    children: React.ReactNode;
}

export const PlayerContext = createContext({} as IPlayerProps);

export function PlayerProvider({ children }: IPlayerProvider) {

    const [musicSelected, setMusicSelected] = useState<Song | null>(null)

    const dictPlayerAction = {
        [EnumPlayerAction.PLAY]: TrackPlayer.play,
        [EnumPlayerAction.PAUSE]: TrackPlayer.pause,
        [EnumPlayerAction.PREV]: TrackPlayer.skipToPrevious,
        [EnumPlayerAction.NEXT]: TrackPlayer.skipToNext,
    }

    async function handleAction(action: EnumPlayerAction) {
        dictPlayerAction[action]()
    }

    async function play(music: Song) {
        await TrackPlayer.load(music);
        await TrackPlayer.play();
    }
    
    async function handleSelectMusicToPlay(music: Song) {
      play(music)
      setMusicSelected(music)
    }
    

    return (
        <PlayerContext.Provider
            value={{
                handleAction,
                handleSelectMusicToPlay,
                musicSelected
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}