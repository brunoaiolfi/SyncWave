import { TextProps } from 'react-native'
import { enumTextVariation } from '../../../models/enums/globals/TextVariation'
import * as Styled from './styles'

interface ContainerProps extends TextProps {
    text?: string,
    variation?: enumTextVariation
    isBold?: boolean

}

export function Text({ text, variation = enumTextVariation.MEDIUM, isBold, ...rest }: ContainerProps) {
    return (
        <Styled.Text
            variation={variation}
            isBold={isBold}
            {...rest}
        >
            {text}
        </Styled.Text>
    )
}