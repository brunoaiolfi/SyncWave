import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";

interface containerProps {
    margin?: string;
}

export const Container = styled.View<containerProps>`
    width: 100%;
    height: 64px;

    margin: ${props => props.margin ? props.margin : '0px'};

    position: absolute;
    bottom: 10px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background: rgba(0, 0, 0, 0.9);
    padding: 8px 12px;
    margin: 0 8px;

    border-radius: 4px;
`;

export const Image = styled.Image`
    width: 48px;
    height: 48px;
`;

export const FakeImage = styled.View`
    width: 48px;
    height: 48px;

    background:#805AD5;

    margin-right: 8px; 
`;

export const Info = styled.View`
    flex-direction: row;
    align-items: center;
    width: 60%;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonIcon = styled(AntDesign)`
    font-size: 24px;
    color: #ffffff;
    margin: 0px 8px;
`;