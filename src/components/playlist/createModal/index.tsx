import { useEffect, useState } from "react";
import { enumButtonVariation } from "../../../models/enums/globals/ButtonVariation";
import { Button } from "../../globals/button";
import { InputText } from "../../globals/inputs/text";
import { ModalComponent } from "../../globals/modal";
import * as Styles from "./styles";
import { Alert, FlatList } from "react-native";
import { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs";
import { PERMISSIONS, RESULTS, request } from "react-native-permissions";
import { getAll } from 'react-native-get-music-files';
import { Text } from "../../globals/text";
import { enumTextVariation } from "../../../models/enums/globals/TextVariation";

interface PlaylistDTO {
    title: string;
    description?: string;
    musics: Song[]
}

interface CreatePlaylistModalProps {
    modalVisible: boolean;
    handleClose: () => void;
    callback: (dto: PlaylistDTO) => Promise<void>;
}

enum EnumSteps {
    title = 0,
    musics = 1
}

export function CreatePlaylistModal({ handleClose, modalVisible, callback }: CreatePlaylistModalProps) {

    const [step, setStep] = useState(EnumSteps.title)

    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()

    const [musics, setMusics] = useState<string | Song[]>([])
    const [musicsSelected, setMusicsSelected] = useState<Song[]>([])

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

    function handleNextStep() {
        if (step === EnumSteps.title) {
            if (!title) {
                Alert.alert('Preencha os campos corretamente')
                return false;
            }
        }

        setStep(step + 1)
    }

    function handlePreviousStep() {
        setStep(step - 1)
    }

    function handleSelectMusic(music: Song) {
        const index = musicsSelected.findIndex(el => el.url === music.url)

        if (index !== -1) {
            const newMusics = musicsSelected.filter(el => el.url !== music.url)
            setMusicsSelected(newMusics)
        } else {
            setMusicsSelected([...musicsSelected, music])
        }
    }

    async function handleCreatePlaylist() {
        if (!musicsSelected.length) {
            Alert.alert('Selecione pelo menos uma música')
            return;
        }

        callback({
            title: title!,
            description,
            musics: musicsSelected
        }).then(() => {
            handleClose()
            setMusicsSelected([])
            setStep(EnumSteps.title)
            setDescription("")
            setTitle("")
        })
    }

    return (
        <ModalComponent
            title="Criar Playlist"
            modalVisible={modalVisible}
            handleClose={handleClose}
        >
            {
                EnumSteps.title === step &&
                <Styles.Container>
                    <Styles.InputContainer>
                        <Text text="Título da playlist: *" />
                        <InputText
                            onChangeValue={(val) => setTitle(val)}
                            placeholder="Título"
                        />
                    </Styles.InputContainer>

                    <Styles.InputContainer>
                        <Text text="Descrição:" />
                        <InputText
                            onChangeValue={(val) => setDescription(val)}
                            placeholder="Descrição"
                            height="100px"
                            multiline={true}
                        />
                    </Styles.InputContainer>
                </Styles.Container>
            }

            {
                EnumSteps.musics === step &&
                <Styles.Container>
                    <FlatList
                        data={typeof musics !== "string" ? musics : []}
                        keyExtractor={(el) => el.url}
                        style={{
                            maxHeight: 340
                        }}
                        renderItem={({ item }) =>
                            <Styles.ContainerMusic activeOpacity={1} onPress={() => handleSelectMusic(item)}>
                                <Styles.FeatherIcon name={musicsSelected.includes(item) ? "check-square" : "square"} color="white" size={18} />
                                <Styles.FakeImage />
                                <Text variation={enumTextVariation.MEDIUM} isBold={true} text={item.title} />
                            </Styles.ContainerMusic>
                        }
                    />
                </Styles.Container>
            }

            <Styles.Footer>
                {
                    EnumSteps.musics !== step ?
                        <Button
                            onPress={handleNextStep}
                            variant={enumButtonVariation.success}
                            text="Próximo"
                            color="black"
                        />
                        :
                        <Button
                            onPress={handleCreatePlaylist}
                            variant={enumButtonVariation.success}
                            text="Concluir"
                            color="black"
                        />
                }
                <Button
                    onPress={handlePreviousStep}
                    variant={enumButtonVariation.secondary}
                    text="Voltar"
                />
            </Styles.Footer>
        </ModalComponent>
    )
}