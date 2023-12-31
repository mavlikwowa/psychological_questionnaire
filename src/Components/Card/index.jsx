import styled from 'styled-components';
import { isDesktopLarge, isDesktopSmall } from '@src/styles';

const Root = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background: #F1F1F1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 22px 15px;
  
  ${isDesktopSmall} {
    border-radius: 10px;
    padding: 35px 80px;
    min-height: calc(100vh - 80px);
    height: 100%;
    width: 100%;
  }
  
  ${isDesktopLarge} {
    width: 100%;
  }
`;

const Card = ({ children }) => {
  return (
    <Root>{children}</Root>
  );
}

export default Card;
