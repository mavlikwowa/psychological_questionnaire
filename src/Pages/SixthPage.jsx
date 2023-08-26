import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { Button } from '@ui';
import { MainContext } from '@src/Providers/MainProvider';
import GreetingRow from '@src/Components/GreetingRow';
import { ArrowIcon, ArrowSlimIcon } from '@images';
import { isDesktopSmall } from '@src/styles';
import CONFIG from '@src/config';
import QuestionWithInput from '@src/Components/QuestionWithInput/index.jsx';
import Example from '@src/Components/Example';

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

const StyledNextButton = styled(Button)`
  width: 294px;
  height: 35px;
  align-self: flex-end;
  margin-top: 20px;
  gap: 7px;
  
  svg {
    width: 15px;
    height: 10px;
  }
`;

const StyledHeader = styled.h3`
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  margin: 20px 0;
  max-width: 840px;

  ${isDesktopSmall} {
    font-size: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  
  ${isDesktopSmall} {
    justify-content: space-between;
    width: 100%;
    gap: 20px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;

const RightSide = styled.div`
  height: 100%;
`;

const StyledExampleButton = styled.button`
  display: flex;
  width: 124px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #FFF;
  cursor: pointer;
  align-self: flex-end;
`;

const StyledPageCount = styled.div`
  display: flex;
  width: 75px;
  height: 26px;
  padding: 5.261px;
  justify-content: center;
  align-items: center;
  gap: 13.152px;
  border-radius: 5.261px;
  border: 1.315px solid #000;
  align-self: flex-end;
  margin-top: 20px;
`;

const StyledRow = styled.span`
  width: 100%;
  display: flex;
  justify-content: ${({ $isDesktop }) => $isDesktop ? 'space-between' : 'flex-end'};
  align-items: center;
  gap: 10px;
  
  ${StyledPageCount} {
    align-self: auto;
  }
  
  ${StyledPageCount}, ${StyledNextButton} {
    margin-top: 0;
  }
`;

const StyledQuestionWithInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`;

const SixthPage = () => {
  const { formData, setFormData, goToNextPage, currentPage } = useContext(MainContext);
  const [questionPage, setQuestionPage] = useState(1);
  const [showExample, setShowExample] = useState(false);

  const onChange = (field, event) => {
    const inputValue = event?.target?.value;
    if (inputValue && (inputValue < 0 || inputValue > 5 || inputValue.length > 1)) return;
    setFormData({ ...formData, [currentPage]: { ...formData[currentPage], [field]: inputValue }})
  };

  const mappingData = Object.keys(CONFIG.mappingFields)
    .filter(k => Object.keys(formData[currentPage]).includes(k));

  const getItemsForPage = (page) => {
    const itemsPerPage = 2;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return mappingData.slice(startIndex, endIndex);
  };

  const isDesktop = useMediaQuery({
    query: `(min-width: 940px)`,
  });

  const onExampleClick = () => setShowExample(true);

  const checkCurrentSum = () => {
    if (getItemsForPage(questionPage).some(k => formData[currentPage][k] === '')) {
      const errorMessage= 'Заполните необходимые поля';
      toast.error(errorMessage, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className: 'toast-error',
      });

      return false;
    }
    const currentSum = getItemsForPage(questionPage)
      .reduce((acc, k) => Number(formData[currentPage][k]) + acc, 0);
    if (currentSum === 5) return true;

    const errorMessage
      = `Ошибка, вы ввели комбинацию цифр сумма которых ${currentSum > 5 ? 'превышает значение' : 'меньше значения'} 5`
    toast.error(errorMessage, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      className: 'toast-error',
    });

    return false;
  }

  const onNextClick = () => {
    if (!checkCurrentSum()) return;
    setQuestionPage(questionPage + 1);
  }

  const isLastPage = questionPage === mappingData.length / 2;

  const onNextPageClick = () => {
    if (isLastPage && !checkCurrentSum()) return;
    goToNextPage();
  }

  const onCloseExample = () => setShowExample(false);

  if (showExample && !isDesktop)
    return <Example onCloseClick={onCloseExample} />

  return (
    <Root>
      <GreetingRow>{
        isDesktop && <StyledButton onClick={onNextPageClick}>Далее<ArrowIcon /></StyledButton>
      }</GreetingRow>
      <Wrapper>
        <LeftSide>
          <StyledHeader>
            Оцените предложенные утверждения по формату «ближе - дальше».{' '}
            НЕ нужно выбирать лишь один из вариантов. Необходимо взвесить оба варианта и распределить между ними 5 баллов{' '}
            в зависимости от того, какой наиболее / наименее откликается.
          </StyledHeader>
          {!isDesktop && (
            <>
              <StyledExampleButton onClick={onExampleClick}>
                Пример<ArrowSlimIcon />
              </StyledExampleButton>
              <StyledPageCount>
                {questionPage} из {mappingData.length / 2}
              </StyledPageCount>
            </>
          )}
          <StyledQuestionWithInputWrapper>
            {getItemsForPage(questionPage).map(k => (
              <QuestionWithInput
                key={k}
                question={`${CONFIG.mappingFields[k]}`}
                value={formData[currentPage][k]}
                field={k}
                onChange={onChange}
              />
            ))}
          </StyledQuestionWithInputWrapper>
          <StyledRow $isDesktop={isDesktop}>
            {isDesktop && (
              <StyledPageCount>
                {questionPage} из {mappingData.length / 2}
              </StyledPageCount>
            )}
            {!isLastPage && (
              <StyledNextButton
                onClick={onNextClick}
              >
                Продолжить<ArrowIcon />
              </StyledNextButton>
            )}
          </StyledRow>
        </LeftSide>
        {isDesktop && (
          <RightSide>
            <Example />
          </RightSide>
        )}
      </Wrapper>
      {!isDesktop && <StyledButton onClick={onNextPageClick}>Далее<ArrowIcon /></StyledButton>}
    </Root>
  );
}

export default SixthPage;
