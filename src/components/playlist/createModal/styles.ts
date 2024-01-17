import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather"

export const Container = styled.View`
    gap: 12px;
`;

export const InputContainer = styled.View`
    gap: 4px;
`;

export const ContainerMusic = styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    
    flex-direction: row;
    align-items: center;
    
    margin: 4px 0;
`;

export const Image = styled.Image`
    width: 48px;
    height: 48px;
`;

export const FakeImage = styled.View`
    width: 48px;
    height: 48px;

    background: #805AD5;

    margin-right: 8px; 
`;

export const Footer = styled.View`
    margin-top: 16px;
    gap: 8px;
`;

export const FeatherIcon = styled(Feather)`
    margin: 0 8px;
`;