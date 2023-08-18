import styled from 'styled-components';
import { isDesktopSmall } from '@src/styles.js';
import PagesAmount from '@src/Components/PagesAmount';

const Root = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  ${isDesktopSmall} {
    margin-bottom: 48px;
  }
`;

const LeftItem = styled.h4`
  color: #5A5A5A;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  ${isDesktopSmall} {
    font-size: 24px;
  }
`;

const RightItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
`

const GreetingRow = ({ children }) => {
  return (
    <Root>
      <LeftItem>AIMME (beta*)</LeftItem>
      <RightItem>
        <PagesAmount />
        {children}
      </RightItem>
    </Root>
  );
}

export default GreetingRow;
