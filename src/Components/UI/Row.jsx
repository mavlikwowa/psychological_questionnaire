import { useMediaQuery } from 'react-responsive';
import styled, { css } from 'styled-components';
import { isDesktopSmall } from '@src/styles.js';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.h4`
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  ${isDesktopSmall} {
    font-size: 24px;
  }
`;

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  ${isDesktopSmall} {
    border-radius: 10px;
  }
`;

const Number = styled.span`
  display: flex;
  padding: 6px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid black;

  ${isDesktopSmall} {
    border-radius: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: white;
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;

  ${isDesktopSmall} {
    flex-direction: row;
  }
`;

const Question = styled.span`
  display: flex;
  padding: 6px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  height: 100%;

  &:hover {
    background: #5A5A5A;
  }

  ${({$selected}) => $selected && css`
    background: #5A5A5A;
    color: #FFF;
  `};

  ${isDesktopSmall} {
    border-radius: 0;
    background: white;
    border: none;
    border: 1px solid #000;
    
    &:last-of-type {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    ${({$selected}) => $selected && css`
      background: #5A5A5A;
      color: #FFF;
  `};
  }
`;

const Row = ({ number = 1, questions = [], label = '', selectedQuestion, setSelectedQuestion, ...props }) => {
  return (
    <Wrapper {...props}>
      <Label>{label}</Label>
      <Root>
        <Number>{number}</Number>
        <QuestionWrapper>
          {questions.map(question => (
            <Question
              onClick={() => setSelectedQuestion(question)}
              $selected={selectedQuestion === question}
              key={question}
            >
              {question}
            </Question>
          ))}
        </QuestionWrapper>
      </Root>
    </Wrapper>
  );
};

export default Row;
