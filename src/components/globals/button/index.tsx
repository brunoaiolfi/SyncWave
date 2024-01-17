import { enumButtonVariation } from '../../../models/enums/globals/ButtonVariation';
import { enumTextVariation } from '../../../models/enums/globals/TextVariation';
import { Text } from '../text';
import * as Styled from './styles'
import { TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    onPress: () => any;
    text?: string;
    textVariant?: enumTextVariation;
    color?: string;
    variant?: enumButtonVariation;
    width?: string;
    height?: string;
    Icon?: () => JSX.Element;
}

export function Button({ text = '', Icon, color, textVariant, ...rest }: ButtonProps) {
    return (
        <Styled.Button
            {...rest}
        >
            <Text
                text={text}
                variation={textVariant}
                color={color}
            />

            {
                Icon &&
                <Icon />
            }
        </Styled.Button>
    )
}