import * as Styled from './styles'
import { TextInputProps } from 'react-native'

interface InputTextProps extends TextInputProps {
    placeholder: string;
    value?: string;
    onChangeValue: (value: string) => void;
    width?: string;
    height?: string;
}

export function InputText({ onChangeValue, placeholder, value, ...rest }: InputTextProps) {
    return (
        <Styled.Input
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeValue}
            editable={true}
            textAlignVertical='top'
            {...rest}
        />
    )
}