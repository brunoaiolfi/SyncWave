import { Container } from "../../components/globals/container";
import { ActivityIndicator } from "react-native";
import * as Styled from './styles';

export function Splash() {
    return (
        <Container>
            <Styled.Body>
                <ActivityIndicator size="large" color="#30E885" />
            </Styled.Body>
        </Container>
    )
}