import { enumButtonVariation } from '../../../models/enums/globals/ButtonVariation';
import { enumTextVariation } from '../../../models/enums/globals/TextVariation';
import { Text } from '../text';
import * as Styled from './styles'
import { TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
    onPress: () => any;
    text: string;
    textVariant?: enumTextVariation;
    variant?: enumButtonVariation;
    width?: string;
    Icon?: () => JSX.Element;
}

export function Button({ text, Icon, ...rest }: ButtonProps) {
    return (
        <Styled.Button
            {...rest}
        >
            <Text
                text={text}
            />

            {
                Icon &&
                <Icon />
            }
        </Styled.Button>
    )
}