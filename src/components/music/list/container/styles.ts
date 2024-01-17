import styled from "styled-components/native";

interface containerProps {
    margin?: string;
}

export const Container = styled.TouchableOpacity<containerProps>`
    width: 100%;
    height: 48px;
    
    flex-direction: row;
    align-items: center;
    
    margin: ${props => props.margin ? props.margin : '0px'};
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