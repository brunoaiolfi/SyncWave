import { useEffect, useState } from "react"
import { useUser } from "../../../hooks/useUser"
import * as Styled from './styles'
import { Text } from "../text";
import { enumTextVariation } from "../../../models/enums/globals/TextVariation";

export function UserHeader() {
    const { userName } = useUser(),
        dictGreetings = {
            morning: '🌥',
            afternoon: '☀️',
            night: '🌙'
        },
        time = getTime();

    function getTime(): keyof typeof dictGreetings {
        const horaAtual = new Date().getHours();

        if (horaAtual >= 6 && horaAtual < 12) {
            return 'morning'
        } else if (horaAtual >= 12 && horaAtual < 18) {
            return 'afternoon'
        } else {
            return 'night'
        }
    }

    return (
        <Styled.Header>
            <Text
                text={`Olá ${userName ?? 'Usuário'} ${dictGreetings[time]}`}
                variation={enumTextVariation.LARGE}
                isBold={true}
            />
        </Styled.Header>
    )
}