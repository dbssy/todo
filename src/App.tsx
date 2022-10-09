import { useState } from 'react';

import '../styles/global.css';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';

export interface Tasks {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  function createTask(taskTitle: string) {
    const newTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      title: taskTitle,
      isCompleted: false,
    };

    setTasks(prevState => [...prevState, newTask]);
  }

  function toggleTaskCompletedById(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleDeleteTaskById(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== taskId);
    
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <>
      <Header
        onCreateTask={createTask}
      />

      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  );
}