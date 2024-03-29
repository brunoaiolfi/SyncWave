import styled from "styled-components/native";
import { enumTextVariation } from "../../../models/enums/globals/TextVariation";

interface textStyleInterface {
    variation: enumTextVariation
    isBold?: boolean
    color?: string
}

const dictTextVariation = {
    [enumTextVariation.LARGE]: '18px',
    [enumTextVariation.MEDIUM]: '14px',
    [enumTextVariation.SMALL]: '12px',
}

export const Text = styled.Text<textStyleInterface>`
    color: ${({ color, theme }) => color ?? theme.colors.white500};
    font-size: ${({ variation }) => dictTextVariation[variation]};
    font-weight: ${({ isBold }) => isBold ? 'bold' : 'normal'};
`;