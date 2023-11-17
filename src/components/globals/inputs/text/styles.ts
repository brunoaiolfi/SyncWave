import styled from "styled-components/native";

interface customStyleProps {
    width?: string
}

export const Input = styled.TextInput.attrs<customStyleProps>({
    placeholderTextColor: "#ffff",
})`
    width: ${({width}) => width ?? "100%"};
    border: 1px solid #ffff;

    border-radius: 8px;

    color: #ffff;
    padding: 8px 12px;
`;