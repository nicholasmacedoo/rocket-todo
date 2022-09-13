import styled from 'styled-components/native'
import { TextInput } from 'react-native'

interface ContainerProps {
    isFocused?: boolean;
}

export const Container = styled.View<ContainerProps>`
    flex: 1;
    height: 54px;
    background: ${props => props.theme.colors["gray-500"]};
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.isFocused ? props.theme.colors['blue-dark'] : 'transparent'};

`

export const InputContainer = styled(TextInput)`
    flex: 1;
    color: ${props => props.theme.colors["gray-100"]};
    padding: 16px;
    font-family: ${props => props.theme.fonts.regular};
`