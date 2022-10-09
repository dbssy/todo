import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import styles from './styles.module.css';

import todoLogo from '../../assets/logo.svg';

interface HeaderProps {
  onCreateTask: (taskTitle: string) => void;
}

export function Header({ onCreateTask }: HeaderProps) {
  const [taskTitle, setTaskTitle] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onCreateTask(taskTitle);
    setTaskTitle('');
  }

  function onChangeTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img
        src={todoLogo}
        alt="Logotipo do todo"
        className={styles.logo}
      />
     
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTaskTitle}
          required
        />

        <button type="submit">
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}