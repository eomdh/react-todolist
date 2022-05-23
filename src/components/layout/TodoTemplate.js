import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TodoHeader from '../TodoHeader';
import TodoList from '../TodoList';
import TodoCreate from '../TodoCreate';

const TodoTemplateBlock = styled.div`
  width: 500px;
  position: relative;
  display: flex;
  flex-direction : column;
`

function TodoTemplate() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TO DO LIST 만들기',
      done: true
    },
    {
      id: 2,
      text: '리액트 공부하기',
      done: true
    },
    {
      id: 3,
      text: '리액트 예제 실습하기',
      done: false
    },
  ])

  const nextId = useRef(4);

  return (    
    <TodoTemplateBlock>
      <TodoHeader todos={ todos }/>
      <TodoList todos={ todos } setTodos={ setTodos } nextId={ nextId }/>
      <TodoCreate todos={ todos } setTodos={ setTodos } nextId={ nextId }/>
    </TodoTemplateBlock>
  )
}

export default TodoTemplate;