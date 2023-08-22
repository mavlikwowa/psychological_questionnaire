import { useContext } from 'react';
import styled from 'styled-components';

import { Button, ListItems } from '@ui';
import { MainContext } from '@src/Providers/MainProvider';
import GreetingRow from '@src/Components/GreetingRow';
import YesNoButtons, { ANSWERS } from '@src/Components/YesNoButtons';
import { ArrowIcon } from '@images';
import { isDesktopSmall } from '@src/styles';
import { useMediaQuery } from 'react-responsive';
import CONFIG from '@src/config';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  width: 160px;
  align-self: flex-end;
  margin-top: 20px;
  
  ${isDesktopSmall} {
    width: 126px;
    height: 35px;
    margin-top: 0;
  }
`;

const HighlightedText = styled.span`
  background-color: #5A5A5A;
  color: white;
  border-radius: 5px;
  padding: 3px;
`;

const StyledHeader = styled.h3`
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 20px;
  max-width: 730px;

  ${isDesktopSmall} {
    font-size: 24px;
  }
`;

const StyledListItems = styled(ListItems)`
  li {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #5A5A5A;
    margin-bottom: 12px;
    
    &::before {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: #5A5A5A;
      margin-right: 3px;
    }
  }
  
  p {
    flex: 1;
  }

  ${isDesktopSmall} {
    flex-direction: column;
    
    li {
      color: black;
      font-size: 18px;
      &::before {
        font-size: 18px;
        color: black;
      }
    }

    p {
      flex: initial;
    }
  }
`;

const ThirdPage = () => {
  const { formData, setFormData, goToNextPage, currentPage } = useContext(MainContext);

  const onClick = (field, answer) => {
    setFormData({ ...formData, [currentPage]: { ...formData[currentPage], [field]: answer }})
  };

  const isDesktop = useMediaQuery({
    query: `(min-width: 940px)`,
  });

  const mappingData = Object.keys(CONFIG.mappingFields).filter(k => Object.keys(formData[currentPage]).includes(k));

  return (
    <Root>
      <GreetingRow>{
        isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>
      }</GreetingRow>
      <StyledHeader>Очень быстро, <HighlightedText>не вдумываясь,</HighlightedText> ответьте на вопросы только ДА или НЕТ.</StyledHeader>
      <StyledListItems>
        {mappingData.map(k => (
          <li key={k}>
            <p>{`${CONFIG.mappingFields[k]}?`}</p>{' '}
            <YesNoButtons
              answer={formData[currentPage][k]}
              onClickYes={() => onClick(k, ANSWERS[0])}
              onClickNo={() => onClick(k, ANSWERS[1])}
            />
          </li>
        ))}
      </StyledListItems>
      {!isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>}
    </Root>
  );
}

export default ThirdPage;
