import { TbClipboardText } from 'react-icons/tb';

import styles from './styles.module.css';

import { Tasks } from '../../App';
import { Task } from '../Task';

interface TaskListProps {
  tasks: Tasks[];
  onDelete: (taskId: number) => void;
  onComplete: (taskId: number) => void;
}

export function TaskList({ tasks, onDelete, onComplete }: TaskListProps) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <div className={styles.tasksContainer}>
      <header className={styles.header}>
        <p>
          <strong>Tarefas criadas</strong>
          <span>{tasksQuantity}</span>
        </p>

        <p>
          <strong className={styles.completedTasks}>Concluídas</strong>
          <span>{completedTasks} de {tasksQuantity}</span>
        </p>
      </header>     

      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}

      {tasks.length <= 0 && (
        <div className={styles.emptyTasks}>
          <TbClipboardText size={50} />

          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong><br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </div>
  );
}