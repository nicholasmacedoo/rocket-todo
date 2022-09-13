import { useState } from "react";
import { Alert } from "react-native";
import { TaskProps } from "../components/Task";

export function useTasks() 
{
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    const totalCreated = tasks.length;

    const totalCompleted = tasks.reduce((acc, task) => {
        if(task.done) acc += 1;
        return acc;
    }, 0);

    function createNewTask(title: string) {
        const newTask = {
            id: new Date().getTime(),
            title,
            done: false,
        }
        setTasks(prev => [...prev, newTask]);
    }
    
    function toggleTaskDone(id: number) {
        setTasks((state) => state.map(task => {
            if(task.id === id) return { ...task, done: !task.done };
            return task;
        }));
    }

    function deleteTask(id: number) {
        return Alert.alert('Deletar tarefa', 'Deseja realmente deletar essa tarefa ?', [
            {
                text: 'Não, cancelar.',
                onPress: null,
            },
            {
                text: 'Sim!',
                onPress: () => setTasks((state) => state.filter(task => {
                    if(task.id === id) return false;
                    return task;
                })),
            }
        ])
        
    }

    return {
        tasks,
        totalCompleted,
        totalCreated,
        createNewTask,
        toggleTaskDone,
        deleteTask
    }
}