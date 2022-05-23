import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 16px;
  border: 1px solid #228be6;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => props.done && css`
      border: 1px solid #228be6;
      color: #228be6;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 18px;
  color: #495057;
  ${props => props.done && css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

function TodoItem({ id, text, done, todos, setTodos}) {
  const onToggle = (id, done) => {
    const copy = [...todos];
    copy[id-1].done = !done;
    setTodos(copy);
  }

  const onRemove = (id) => {
    const copy = [...todos];
    setTodos(copy.filter((todo) => todo.id !== id));
  }

  return (
    <TodoItemBlock>
      <CheckCircle done={ done } onClick={ () => onToggle(id, done) }>
        { done && <MdDone /> }
      </CheckCircle>
      <Text done={ done }>{ text }</Text>
      <Remove onClick={ () => onRemove(id) }>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
}

export default TodoItem;