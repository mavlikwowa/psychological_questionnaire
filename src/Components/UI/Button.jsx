import styled from 'styled-components';
import { isDesktopSmall } from '@src/styles.js';

const Root = styled.button`
  display: flex;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  border-radius: 10px;
  background: #5A5A5A;
  cursor: pointer;
  
  &:hover:not(:disabled) {
    background: black;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
  
  ${isDesktopSmall} {
    height: 64px;  
  }
`

const Button = ({ children, disabled, ...props }) => {
  return (
    <Root {...props}>
      {disabled ? 'Загрузка...' : children}
    </Root>
  );
}

export default Button;
