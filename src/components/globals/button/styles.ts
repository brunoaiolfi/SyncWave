import styled from "styled-components/native";
import { enumButtonVariation } from "../../../models/enums/globals/ButtonVariation";

interface customStyleProps {
    width?: string,
    height?: string,
    variant?: enumButtonVariation,
}

const dictBackgroundColor = {
    [enumButtonVariation.primary]: "#ffff",
    [enumButtonVariation.secondary]: "transparent",
    [enumButtonVariation.success]: "#30E885",
}

export const Button = styled.TouchableOpacity<customStyleProps>`
    width: ${({ width }) => width ?? "100%"};
    height: ${({ height }) => height ?? "48px"};
    
    background-color: ${({ variant: variation }) => dictBackgroundColor[variation ?? enumButtonVariation.primary] ?? '#ffffff'};
    border-radius: 4px;

    justify-content: center;
    align-items: center;
    flex-direction: row;

`;