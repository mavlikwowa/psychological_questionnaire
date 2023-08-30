import styled from 'styled-components';
import { Header } from '@ui';
import GreetingRow from '@src/Components/GreetingRow';
import { isDesktopSmall } from '@src/styles.js';


const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const StyledHeader = styled(Header)`
  margin-bottom: 20px;
  ${isDesktopSmall} {
    margin-top: 60px;
  }
`

const StyledText = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;


const Finish = () => {
  return (
    <Root>
      <GreetingRow />
      <StyledHeader>Вы прошли тест.</StyledHeader>
      <StyledText>
        Поздравляем, первый этап позади! Вы завершили тест.<br/>
        Результата уже обработаны AIMME и переданы вашему инструктору. Все самое интересное вы узнаете на следующем этапе, а эту страницу можно закрыть.
      </StyledText>
    </Root>
  );
};

export default Finish;
