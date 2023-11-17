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

const dictRandomColor = {
    [1]: '#DD6B20',
    [2]: '#3182CE',
    [3]: '#E53E3E',
    [4]: '#38A169',
    [5]: '#805AD5',
    [6]: '#D69E2E',
    [7]: '#4A5568',
    [8]: '#2C7A7B',
    [9]: '#2B6CB0',
}

export const FakeImage = styled.View`
    width: 48px;
    height: 48px;

    background: ${props => dictRandomColor[Math.floor(Math.random() * 10 + 1)] ?? '#805AD5'};

    margin-right: 8px; 
`;