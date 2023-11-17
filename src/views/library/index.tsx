import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { getAll } from 'react-native-get-music-files'
import { Song } from 'react-native-get-music-files/lib/typescript/src/NativeTurboSongs';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { Container } from '../../components/globals/container';
import { MusicPlayer } from '../../components/music/player';
import { usePlayer } from '../../hooks/usePlayer';
import { UserHeader } from '../../components/globals/userHeader';
import { MusicList } from '../../components/music/list';

export function Library() {
  return (
    <Container>

      <UserHeader />
      <MusicList />

    </Container>
  )
}