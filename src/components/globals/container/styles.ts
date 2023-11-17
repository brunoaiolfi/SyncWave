import styled from "styled-components/native";

export const Container = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.gray800 };
    width: 100%;
    height: 100%;

    padding: 10px;
`;