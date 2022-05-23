import styled from 'styled-components';
import TodoTemplate from './TodoTemplate';
import WeatherTemplate from './WeatherTemplate';
import CalendarTemplate from './CalendarTemplate';

const TemplateBlock = styled.div`
  width: 1000px;
  height: 610px;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: row;

  .left {
    display: flex;
    width: 50%;
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`

function Template() {
  return (
    <TemplateBlock>
      <div className="left">
        <TodoTemplate />
      </div>
      <div className="right">
        <WeatherTemplate />
        <CalendarTemplate />
      </div>
    </TemplateBlock>
  )
}

export default Template;