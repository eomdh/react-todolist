import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding : 20px 32px;
  padding-bottom : 48px;
  overflow-y : auto;
`;

function TodoList(props) {
  return (
    <TodoListBlock>
      {
        props.todos.map((todo) => {
          return (
            <TodoItem id={ todo.id }
                      text={ todo.text }
                      done={ todo.done }
                      todos={ props.todos }
                      setTodos={ props.setTodos } />
          );
        })
      }
    </TodoListBlock>
  )
}

export default TodoList;