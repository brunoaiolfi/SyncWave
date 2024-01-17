import { Alert, FlatList } from 'react-native';
import { Container as MusicListContainer } from './container';
import { useEffect, useState } from 'react';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { getAll } from 'react-native-get-music-files';
import { Song } from 'react-native-get-music-files/lib/typescript/src/NativeTurboSongs';
import { usePlayer } from '../../../hooks/usePlayer';

export function MusicList() {

    const { handleSelectMusicToPlay } = usePlayer()
    const [musics, setMusics] = useState<string | Song[]>([])

    useEffect(() => {
        handleGetAllMusicsFiles()
    }, [])

    async function handleGetAllMusicsFiles() {
        try {
            const permissao = await request(
                PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
            )

            if (permissao !== RESULTS.GRANTED) return false;

            const res = await getAll({})
            setMusics(res)
        } catch (error) {
            Alert.alert('Não foi possível recuperar as músicas do seu dispositivo');
        }
    }


    return (
        <>
            <FlatList
                data={typeof musics !== 'string' ? musics : []}
                renderItem={({ item }) => <MusicListContainer onPress={handleSelectMusicToPlay} music={item} margin={'8px 0'} />}
            />
        </>
    )
} 