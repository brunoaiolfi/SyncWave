import { useState } from "react";
import { Container } from "../../components/globals/container";
import { InputText } from "../../components/globals/inputs/text";
import * as Styled from './styles'
import { enumTextVariation } from "../../models/enums/globals/TextVariation";
import { Text } from "../../components/globals/text";
import { Button } from "../../components/globals/button";
import { enumButtonVariation } from "../../models/enums/globals/ButtonVariation";
import { useUser } from "../../hooks/useUser";
import { Alert } from "react-native";

export function SaveUserName() {

  const { saveUserName } = useUser();
  const [name, setName] = useState('');

  async function handleSaveUserName() {
    if (name.length < 3) return Alert.alert('Atenção', 'O nome deve ter no mínimo 3 caracteres');
    await saveUserName(name)
  }

  return (
    <Container>
      <Styled.Form>
        <Styled.Header>
          <Text
            text={`Olá usuário,`}
            variation={enumTextVariation.LARGE}
          />
          <Text
            text={`como deseja ser chamado?`}
            variation={enumTextVariation.LARGE}
          />
        </Styled.Header>

        <Styled.InputContainer>
          <InputText
            placeholder="Digite seu nome"
            value={name}
            onChangeValue={setName}
            width={'80%'}
          />

          <Button
            onPress={handleSaveUserName}
            variant={enumButtonVariation.success}
            text={''}
            Icon={() => <Styled.BtnIcon name='arrowright' color="#000" size={24} />}
            width={'56px'}
          />
        </Styled.InputContainer>
      </Styled.Form>
    </Container>
  )
}
