import { useContext } from 'react';
import styled from 'styled-components';
import { Header, Button, ListItems } from '@ui';
import { ArrowIcon } from '@images';
import GreetingRow from '@src/Components/GreetingRow';
import Focus from '@src/Components/Focus';
import { MainContext } from '@src/Providers/MainProvider';
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
  font-weight: normal;
`

const StyledButton = styled(Button)`
  width: 160px;
  align-self: flex-end;
  
  ${isDesktopSmall} {
    width: 218px;
  }
`;

const StyledFocus = styled(Focus)`
  justify-content: space-between;
  gap: 21px;
  
  li {
    margin-bottom: 21px;
  }
  
  ${isDesktopSmall} {
    gap: 0;
    
    li {
      margin-bottom: 0; 
    }
  }
`

const Greetings = () => {
  const { goToNextPage } = useContext(MainContext);

  return (
    <Root>
      <GreetingRow />
      <StyledHeader>Приветствуем!<br />Это ваш персональный тест от AIMME.</StyledHeader>
      <StyledFocus>
        <ListItems>
          <li>Отвечайте на вопросы быстро.</li>
          <li>Не обманывая себя.</li>
        </ListItems>
        <StyledButton onClick={goToNextPage}>Начать<ArrowIcon /></StyledButton>
      </StyledFocus>
    </Root>
  );
};

export default Greetings;
