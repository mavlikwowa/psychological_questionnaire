import styled, { css } from 'styled-components';
import { isDesktopMedium, isDesktopSmall } from '@src/styles.js';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  ${isDesktopMedium} {
    margin-bottom: 0;
  }
`;

const Label = styled.h4`
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  ${isDesktopMedium} {
    font-size: 24px;
  }
`;

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  ${isDesktopMedium} {
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
  width: 40px;

  ${isDesktopMedium} {
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
  white-space: nowrap;

  ${isDesktopMedium} {
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
  min-width: 70vw;
  
  ${isDesktopSmall} {
    min-width: 50vw;
  }

  &:hover {
    background: #5A5A5A;
  }

  ${({$selected}) => $selected && css`
    background: #5A5A5A;
    color: #FFF;
  `};

  ${isDesktopMedium} {
    border-radius: 0;
    background: white;
    border: none;
    border: 1px solid #000;
    width: 237px;
    min-width: auto;
    
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
      {label && <Label>{label}</Label>}
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
