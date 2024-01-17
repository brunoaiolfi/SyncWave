import { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs";
import * as Styles from "./styles";
import { Text } from "../../../globals/text";
import { enumTextVariation } from "../../../../models/enums/globals/TextVariation";

interface MusicListContainerProps {
    music: Song;
    margin?: string;
    onPress?: (music: Song) => Promise<void>;
}

export function Container({ music, margin, onPress }: MusicListContainerProps) {

    function handlePress() {
        if (onPress) onPress(music)
    }

    return (
        <Styles.Container activeOpacity={1} onPress={handlePress} margin={margin}>
            <Styles.FakeImage />
            <Text variation={enumTextVariation.MEDIUM} isBold={true} text={music.title} />
        </Styles.Container>
    )
}