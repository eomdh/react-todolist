import styled from 'styled-components';

const TodoHeadBlcok = styled.div`
  padding-top: 30px;
  padding-left: 48px;
  padding-right: 32px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;

  h1 {
      margin: 0;
      font-size: 32px;
      color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks {
    color: #228be6;
    font-size: 25px;
    padding-right: 5px;
    font-weight: bold;
    text-align: right;
  }
`;

function TodoHeader(props) {
  const todos = props.todos;
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today= new Date();
  const dateString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <TodoHeadBlcok>
        <h1>{ dateString }</h1>
        <div className='day'>{ dayName }</div>
        <div className='tasks'>{ undoneTasks.length } tasks</div>
    </TodoHeadBlcok>
  )
}

export default TodoHeader;