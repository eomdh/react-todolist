import styled from 'styled-components';
import Weather from '../Weather.js';

const WeatherTemplateBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`

function WeatherTemplate() {

  return (
    <WeatherTemplateBlock>
      <Weather/>
    </WeatherTemplateBlock>
  )
}

export default WeatherTemplate;