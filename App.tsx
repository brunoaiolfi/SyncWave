import 'react-native-gesture-handler';
import { ThemeProvider } from "styled-components";
import { themeDark } from "./src/themes/dark";
import { PlayerProvider } from "./src/context/playerContext";
import TrackPlayer from "react-native-track-player";
import { useEffect } from "react";
import { UserProvider } from "./src/context/userContext";
import { IndexNavigator } from "./src/router";
import { PlaylistProvider } from './src/context/playlistContext';

export function App() {

  useEffect(() => {
    start()
  }, [])

  async function start() {
    await TrackPlayer.setupPlayer();
  }

  return (
    <>
      <ThemeProvider theme={themeDark}>

        <PlaylistProvider>
          <UserProvider>
            <PlayerProvider>
              <IndexNavigator />
            </PlayerProvider>
          </UserProvider>
        </PlaylistProvider >

      </ThemeProvider>
    </>
  )
};