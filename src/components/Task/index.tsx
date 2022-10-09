import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import styles from './styles.module.css';

import { Tasks } from '../../App';

interface TaskProps {
  task: Tasks;
  onDelete: (taskId: number) => void;
  onComplete: (taskId: number) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkbox}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      
      <p
        className={task.isCompleted ? styles.textCompleted : ''}
      >
        {task.title}
      </p>
      
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}