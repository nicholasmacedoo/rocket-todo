import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    background-color: ${props => props.theme.colors["gray-500"]};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.colors["gray-400"]};
    border-radius: 8px;
    margin-bottom: 8px;
`

interface TitleProps {
    isDone?: boolean;
}

export const Title = styled.Text<TitleProps>`
    font-family: ${props => props.theme.fonts.regular};
    font-size: 14px;
    color: ${props => props.theme.colors["gray-100"]};
    
    ${props => props.isDone && css`
        text-decoration: line-through;
        color: ${props => props.theme.colors["gray-300"]};
    `}
`

export const ToggleCheckTask = styled(TouchableOpacity)`
    flex: 1;
    flex-direction: row;
    align-items: center;
`

interface ContainerCheckProps {
    isChecked?: boolean;
}
export const ContainerCheck = styled.View<ContainerCheckProps>`
    height: 24px;
    width: 24px;
    border-radius: 48px;
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.theme.colors.blue};
    margin-right: 8px;

    align-items: center;
    justify-content: center;

    background: ${props => props.isChecked ? props.theme.colors.blue : 'transparent'};
`

export const ButtonDeleteTask = styled(TouchableOpacity)`
    height: 32px;
    width: 32px;
    align-items: center;
    justify-content: center;
`