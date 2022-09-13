import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'
import {
    ButtonDeleteTask,
    Container, 
    ContainerCheck, 
    Title, 
    ToggleCheckTask
} from './styles';

export interface TaskProps {
    id: number;
    title: string;
    done: boolean;
}

interface Props {
    task: TaskProps;
    toggleTaskDone: (id: number) => void
    deleteTask: (id: number) => void
}

export function Task({ task, toggleTaskDone, deleteTask }: Props)
{
    const { colors } = useTheme()

    return (
        <Container>
            <ToggleCheckTask onPress={() => toggleTaskDone(task.id)}>
                <Check isChecked={task.done}/>
                <Title isDone={task.done}>{task.title}</Title>
            </ToggleCheckTask>
            <ButtonDeleteTask onPress={() => deleteTask(task.id)}>
                <Feather name='trash' size={16} color={colors['gray-300']}/>
            </ButtonDeleteTask>
        </Container>
    );
}

interface CheckProps {
    isChecked?: boolean;
}

function Check({ isChecked }: CheckProps) {
    return (
        <ContainerCheck isChecked={isChecked}>
            {isChecked && <Feather name='check' color={"white"}/>}
        </ContainerCheck>
    )
}