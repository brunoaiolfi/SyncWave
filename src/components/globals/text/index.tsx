import { enumTextVariation } from '../../../models/enums/globals/TextVariation'
import * as Styled from './styles'

interface ContainerProps {
    text?: string,
    variation?: enumTextVariation
    isBold?: boolean

}

export function Text({ text, variation = enumTextVariation.MEDIUM, isBold }: ContainerProps) {
    return (
        <Styled.Text
            variation={variation}
            isBold={isBold}
        >
            {text}
        </Styled.Text>
    )
}