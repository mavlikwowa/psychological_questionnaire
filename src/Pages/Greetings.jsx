import styled from 'styled-components';
import { Header, Button } from '@ui';
import { ArrowIcon } from '@images';
import { isDesktopSmall } from '@src/styles.js';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledButton = styled(Button)`
  width: 160px;
  
  ${isDesktopSmall} {
    width: 218px;
  }
`;

const Greetings = () => {
  return (
    <Root>
      <Header>Это ваш персональный тест от AIMME.</Header>
      <StyledButton>Начать!<ArrowIcon /></StyledButton>
    </Root>
  );
};

export default Greetings;
