import { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs";
import * as Styles from "./styles";
import { Text } from "../../globals/text";
import { enumTextVariation } from "../../../models/enums/globals/TextVariation";
import { EnumPlayerAction } from "../../../models/enums/player/Player";
import { usePlayer } from "../../../hooks/usePlayer";

interface MusicListContainerProps {
    music: Song;
    margin?: string;
}

export function MusicPlayer({ music, margin }: MusicListContainerProps) {

    const { handleAction } = usePlayer();

    async function handleOnPressAction(action: EnumPlayerAction) {
        await handleAction(action)
    };

    return (
        <Styles.Container margin={margin}>
            <Styles.Wrapper>
                <Styles.Info>
                    <Styles.FakeImage />
                    <Text
                        text={music.title}
                        variation={enumTextVariation.MEDIUM}
                        isBold={true}
                        ellipsizeMode="tail"
                        numberOfLines={1}
                    />
                </Styles.Info>
                <Styles.ButtonsContainer>
                    <Styles.Button onPress={() => handleOnPressAction(EnumPlayerAction.PREV)}>
                        <Styles.ButtonIcon name="stepbackward" color="#ffffff" />
                    </Styles.Button>
                    <Styles.Button onPress={() => handleOnPressAction(EnumPlayerAction.PLAY)}>
                        <Styles.ButtonIcon name="caretright" />
                    </Styles.Button>
                    <Styles.Button onPress={() => handleOnPressAction(EnumPlayerAction.PAUSE)}>
                        <Styles.ButtonIcon name="pause" />
                    </Styles.Button>
                    <Styles.Button onPress={() => handleOnPressAction(EnumPlayerAction.NEXT)}>
                        <Styles.ButtonIcon name="stepforward" />
                    </Styles.Button>
                </Styles.ButtonsContainer>
            </Styles.Wrapper>
        </Styles.Container>
    )
}