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
      text: '프로젝트 생성하기',
      done: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링하기',
      done: true
    },
    {
      id: 3,
      text: 'Context 만들기',
      done: false
    },
    {
      id: 4,
      text: '기능 구현하기',
      done: false
    }
  ])

  const nextId = useRef(5);

  return (    
    <TodoTemplateBlock>
      <TodoHeader todos={ todos }/>
      <TodoList todos={ todos } setTodos={ setTodos } nextId={ nextId }/>
      <TodoCreate todos={ todos } setTodos={ setTodos } nextId={ nextId }/>
    </TodoTemplateBlock>
  )
}

export default TodoTemplate;