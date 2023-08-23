import { memo } from 'react';
import styled, { css } from 'styled-components';
import { isDesktopSmall } from '@src/styles.js';

export const ANSWERS = ['ДА', 'НЕТ'];

const Root = styled.div`
  background: white;
  padding: 3px;
  gap: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 23px;

  ${isDesktopSmall} {
    margin-left: 15px;
  }
`;

const StyledButton = styled.button`
  font-size: 12.6px;
  cursor: pointer;
  display: flex;
  width: 44px;
  height: 49px;
  padding: 1.05px 5.25px 2.625px 5.25px;
  justify-content: center;
  align-items: center;
  gap: 5.25px;
  flex-shrink: 0;
  border-radius: 2.625px;
  
  &:hover {
    background: #5A5A5A;
    color: white;
  }
  
  border: 0.525px solid #5A5A5A;
  ${({ $clicked }) => $clicked && css`
    border: 0.525px solid #5A5A5A;
    background: #5A5A5A;
    color: white;
  `}

  ${isDesktopSmall} {
    display: flex;
    width: 31.5px;
    padding: 1.05px 5.25px 2.625px 5.25px;
    justify-content: center;
    align-items: center;
    gap: 5.25px;
    border-radius: 2.625px;
    border: 0.525px solid #000;
    height: 20px;
  }
`;

const YesNoButtons = ({ onClickYes, onClickNo, answer, ...props }) => {
  return (
    <Root {...props}>
      <StyledButton $clicked={answer === ANSWERS[0]} onClick={onClickYes}>{ANSWERS[0]}</StyledButton>
      <StyledButton $clicked={answer === ANSWERS[1]} onClick={onClickNo}>{ANSWERS[1]}</StyledButton>
    </Root>
  );
};

export default memo(YesNoButtons);
