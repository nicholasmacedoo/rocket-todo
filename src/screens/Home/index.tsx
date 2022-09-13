import React, { useState } from 'react'
import { Alert, FlatList, Image } from 'react-native'
import { useTasks } from '../../hooks/useTasks'
import { Feather } from '@expo/vector-icons'
import { Input } from '../../components/Input'

import logo from '../../assets/logo.png'
import imageEmptyTask from '../../assets/clipboard-icon.png'
import {
    AddTaskButton,
    Container, 
    Form, 
    GroupInfoTask, 
    HeaderInfoTask, 
    TextInfoTask,
    BadgeCount,
    BadgeCountText,
    EmptyTaskContainer,
    TextEmptyTask,
} from './styles';
import { Task } from '../../components/Task'

export function Home() {
    const [title, setTitle] = useState('')
    const { 
        tasks, 
        totalCompleted, 
        totalCreated, 
        createNewTask,
        toggleTaskDone,
        deleteTask,
    } = useTasks();

    function handleSubmit() {
        if(!title) return Alert.alert('Adicionar tarefa', 'Por favor, digite um titulo para sua tarefa.');
        createNewTask(title);
        setTitle('');
    }

    return (
        <Container>
            <Image source={logo}/>
            <Form>
                <Input placeholder='Adicione uma nova tarefa' value={title} onChangeText={setTitle}/>
                <AddTaskButton onPress={handleSubmit}>
                    <Feather name='plus-circle' color="white" size={16} />
                </AddTaskButton>
            </Form>
            <HeaderInfoTask>
                <GroupInfoTask>
                    <TextInfoTask variant="blue">Criadas</TextInfoTask>
                    <BadgeCount>
                        <BadgeCountText>{totalCreated}</BadgeCountText>
                    </BadgeCount>
                </GroupInfoTask>
                <GroupInfoTask>
                    <TextInfoTask variant="purple">Concluídas</TextInfoTask>
                    <BadgeCount>
                        <BadgeCountText>{totalCompleted}</BadgeCountText>
                    </BadgeCount>
                </GroupInfoTask>
            </HeaderInfoTask>
            
            {tasks.length > 0 ? (
                <FlatList 
                    data={tasks}
                    keyExtractor={item => String(item.id)}
                    style={{ width: '100%' }}
                    contentContainerStyle={{ paddingBottom: 24 }}
                    renderItem={({ item }) => (
                        <Task 
                            task={item} 
                            toggleTaskDone={toggleTaskDone} 
                            deleteTask={deleteTask}
                        />
                    )}
                />
            ) : (
                <EmptyTaskContainer>
                    <Image source={imageEmptyTask} style={{ marginBottom: 16 }}/>
                    <TextEmptyTask variant="bold">Você ainda não tem tarefas cadastradas</TextEmptyTask>
                    <TextEmptyTask variant="regular">Crie tarefas e organize seus itens a fazer</TextEmptyTask>
                </EmptyTaskContainer>
            )}
        </Container>
  );
}