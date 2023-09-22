import { useContext } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Button, ListItems } from '@ui';
import { MainContext } from '@src/Providers/MainProvider';
import GreetingRow from '@src/Components/GreetingRow';
import YesNoButtons, { ANSWERS } from '@src/Components/YesNoButtons';
import { ArrowIcon } from '@images';
import { isDesktopSmall } from '@src/styles';
import CONFIG from '@src/config';
import Focus from '@src/Components/Focus/index.jsx';

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
  text-decoration: underline;
  font-weight: 800;
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
  ${isDesktopSmall} {
    flex-direction: column;
  }
`;

const StyledRow = styled(Focus)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;

  ${isDesktopSmall} {
    border: none;
    border-radius: initial;
    margin-bottom: 0;
    justify-content: flex-start;
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
      <GreetingRow />
      <StyledHeader>Ответьте на вопросы только &#171;Да&#187; или &#171;Нет&#187;:</StyledHeader>
      <StyledListItems>
        {mappingData.map((k, index) => (
          <StyledRow key={k}>
            {`${index + 1}. ${CONFIG.mappingFields[k]}?`}
            <YesNoButtons
              answer={formData[currentPage][k]}
              onClickYes={() => onClick(k, ANSWERS[0])}
              onClickNo={() => onClick(k, ANSWERS[1])}
            />
          </StyledRow>
        ))}
      </StyledListItems>
      <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>
    </Root>
  );
}

export default ThirdPage;
