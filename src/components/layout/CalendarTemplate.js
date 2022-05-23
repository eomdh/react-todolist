import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Calendar from 'react-calendar';
import './Calendar.css';

const CalendarTemplateBlock = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
`

function CalendarTemplate() {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarTemplateBlock>
      <Calendar
        onChange={ onChange } 
        value={value}
        formatDay={ (locale, date) => moment(date).format("DD") }
        navigationLabel={ null }
        showNeighboringMonth={ false }
        calendarType = { "US" }
        locale = { "en-US" }
      />
    </CalendarTemplateBlock>
  );
}

export default CalendarTemplate;