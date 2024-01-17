import React from 'react';
import { Container } from '../../components/globals/container';
import { UserHeader } from '../../components/globals/userHeader';
import { MusicList } from '../../components/music/list';
import { PlaylistList } from '../../components/playlist/list';

export function Library() {
  return (
    <Container>

      <UserHeader />

      <PlaylistList
        canCreate={true}
      />

      <MusicList />

    </Container>
  )
}