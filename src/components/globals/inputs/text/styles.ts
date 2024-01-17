import styled from "styled-components/native";

interface customStyleProps {
    width?: string
    height?: string
}

export const Input = styled.TextInput.attrs<customStyleProps>({
    placeholderTextColor: "#718096",
})`
    width: ${({width}) => width ?? "100%"};
    height: ${({height}) => height ?? "48px"};

    border: 1px solid #ffff;

    border-radius: 8px;

    color: #ffff;
    padding: 14px 12px;
`;