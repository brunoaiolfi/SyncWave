import styled from "styled-components/native";
import { enumButtonVariation } from "../../../models/enums/globals/ButtonVariation";

interface customStyleProps {
    width?: string,
    variant?: enumButtonVariation,
}

const dictBackgroundColor = {
    [enumButtonVariation.primary]: "#ffff",
    [enumButtonVariation.secondary]: "none",
    [enumButtonVariation.success]: "#30E885",
}

export const Button = styled.TouchableOpacity<customStyleProps>`
    width: ${({ width }) => width ?? "100%"};
    
    background-color: ${({ variant: variation }) => dictBackgroundColor[variation ?? enumButtonVariation.primary] ?? '#ffffff'};
    border-radius: 8px;

    justify-content: center;
    align-items: center;
    flex-direction: row;

`;