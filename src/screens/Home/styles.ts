import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors["gray-600"]};
    padding: 72px 24px 24px;
    align-items: center;
`

export const Form = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
`

export const AddTaskButton = styled(TouchableOpacity)`
    height: 54px;
    padding: 18px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: ${props => props.theme.colors.blue};
    margin-left: 4px;
`

export const HeaderInfoTask = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 20px;
`

export const GroupInfoTask = styled.View`
    flex-direction: row;
    align-items: center;
`

interface TextInfoTaskProps {
    variant: 'blue' | 'purple';
}

export const TextInfoTask = styled.Text<TextInfoTaskProps>`
    font-family: ${props => props.theme.fonts.bold};
    font-size: 14px;
    color: ${props => props.theme.colors[props.variant]};
`

export const BadgeCount = styled.View`
    padding: 2px 8px;
    border-radius: 32px;
    background-color: ${props => props.theme.colors["gray-400"]};
    margin-left: 8px;
`
export const BadgeCountText = styled.Text`
    font-family: ${props => props.theme.fonts.bold};
    font-size: 12px;
    color: ${props => props.theme.colors["gray-200"]};
`

export const EmptyTaskContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 48px 20px;
    border-top-width: 1px;
    border-top-color: ${props => props.theme.colors["gray-400"]};
    border-style: solid;
`

interface TextEmptyTaskProps {
    variant: 'regular' | 'bold';
}

export const TextEmptyTask = styled.Text<TextEmptyTaskProps>`
    font-family: ${props => props.theme.fonts[props.variant]};
    font-size: 14px;
    color: ${props => props.theme.colors["gray-300"]};
`