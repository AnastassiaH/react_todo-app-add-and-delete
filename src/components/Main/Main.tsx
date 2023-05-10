import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem';

type Props = {
  todos: Todo[],
  tempTodo: Todo | null,
  isTempLoading: boolean,
  setTodos: (todos: Todo[]) => void,
  pushError: (title: string) => void,
  toBeCleared: Todo[],
};

export const Main: React.FC<Props> = ({
  todos,
  tempTodo,
  isTempLoading,
  pushError,
  setTodos,
  toBeCleared,
}) => {
  return (
    <section className="todoapp__main">
      {todos.map(todo => (

        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          pushError={pushError}
          setTodos={setTodos}
          toBeCleared={toBeCleared}
        />
      ))}
      {tempTodo && (
        <TodoItem
          todo={tempTodo}
          isTempLoading={isTempLoading}
        />
      )}
    </section>
  );
};