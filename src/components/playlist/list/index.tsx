import { useEffect, useState } from "react";
import { Playlist } from "../../../models/types/playlist";
import { usePlaylist } from "../../../hooks/usePlaylist";
import { Alert, FlatList } from "react-native";
import { PlaylistComponent } from "..";
import { Button } from "../../globals/button";
import { AddIcon } from "./styles";
import { CreatePlaylistModal } from "../createModal";
import { PlaylistDTO } from "../../../context/playlistContext";
import { Text } from "../../globals/text";
import { enumTextVariation } from "../../../models/enums/globals/TextVariation";

interface PlaylistListProps {
    canCreate?: boolean;
}

export function PlaylistList({ canCreate = false }: PlaylistListProps) {

    const { getAllPlaylists, createPlaylist } = usePlaylist();
    const [allPlaylists, setAllPlaylists] = useState<Playlist[]>([])
    const [isModalCreatePlaylistOpen, setIsModalCreatePlaylistOpen] = useState(false);

    useEffect(() => {
        handleGetAllPlaylists();
    }, [])

    async function handleGetAllPlaylists() {
        const playlists = await getAllPlaylists();
        setAllPlaylists(playlists);
    }

    function handleOpenModalCreatePlaylist() {
        setIsModalCreatePlaylistOpen(true);
    }

    function handleCloseModalCreatePlaylist() {
        setIsModalCreatePlaylistOpen(false);
    }

    async function handleCreate(dto: PlaylistDTO) {
        try {
            await createPlaylist(dto)
            handleCloseModalCreatePlaylist()
            Alert.alert('Playlist criada com sucesso!')
        } catch (error: any) {
            Alert.alert(error)
        }
    }
    return (
        <>
            <CreatePlaylistModal
                handleClose={handleCloseModalCreatePlaylist}
                modalVisible={isModalCreatePlaylistOpen}
                callback={handleCreate}
            />

            <Text
                text="Playlists"
                variation={enumTextVariation.LARGE}
                style={{ marginVertical: 10 }}
                isBold={true}
            />

            <FlatList
                data={allPlaylists}
                horizontal={true}
                ListHeaderComponent={() =>
                    canCreate && <Button
                        onPress={handleOpenModalCreatePlaylist}
                        Icon={() => <AddIcon name="plus" color="#ffff" size={22} />}
                        style={{ width: 100, height: 100, backgroundColor: '#4A5568' }}
                    />
                }
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PlaylistComponent playlist={item} />}
            />
        </>
    )
}