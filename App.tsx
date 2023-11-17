import 'react-native-gesture-handler';
import { ThemeProvider } from "styled-components";
import { themeDark } from "./src/themes/dark";
import { PlayerProvider } from "./src/context/playerContext";
import TrackPlayer from "react-native-track-player";
import { useEffect } from "react";
import { UserProvider } from "./src/context/userContext";
import { IndexNavigator } from "./src/router";

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
        <UserProvider>
          <PlayerProvider>
            <IndexNavigator />
          </PlayerProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  )
};