import { useContext } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Button, Row } from '@ui';
import { MainContext } from '@src/Providers/MainProvider';
import GreetingRow from '@src/Components/GreetingRow';
import { ArrowIcon } from '@images';
import { isDesktopSmall } from '@src/styles';
import CONFIG from '@src/config';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
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

const StyledHeader = styled.h3`
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
  max-width: 730px;
  line-height: normal;

  ${isDesktopSmall} {
    font-size: 24px;
  }
`;

const FifthPage = () => {
  const { formData, setFormData, goToNextPage, currentPage } = useContext(MainContext);

  const onChange = (field, value) => {
    setFormData({ ...formData, [currentPage]: { ...formData[currentPage], [field]: value }})
  };

  const isDesktop = useMediaQuery({
    query: `(min-width: 940px)`,
  });

  const { questions } = CONFIG.pages[currentPage];

  return (
    <Root>
      <GreetingRow>{
        isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>
      }</GreetingRow>
      <StyledHeader>В каждой строке выберите только одно из четырех слов, которое наиболее точно характеризует вас.</StyledHeader>
      {Object.keys(questions).map((k, index) => (
        <Row
          key={k}
          selectedQuestion={formData[currentPage][k]}
          setSelectedQuestion={(newValue) => onChange(k, newValue)}
          number={index}
          questions={questions[k]}
        />
      ))}
      {!isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>}
    </Root>
  );
}

export default FifthPage;
