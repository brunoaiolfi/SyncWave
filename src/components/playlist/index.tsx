import { enumTextVariation } from "../../models/enums/globals/TextVariation";
import { Playlist } from "../../models/types/playlist";
import { Text } from "../globals/text";
import * as Style from './styles';

interface IPlaylistProps {
    playlist: Playlist;
}

export function PlaylistComponent({ playlist }: IPlaylistProps) {
    function handleOpenPlaylist() {
        
    }

    return (
        <Style.Container
            onPress={handleOpenPlaylist}
            activeOpacity={0.8}
        >
            <Text
                text={playlist.name}
                variation={enumTextVariation.MEDIUM}
                isBold={true}
            />
        </Style.Container>
    )
}