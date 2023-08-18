import styled from 'styled-components';
import { isDesktopSmall } from '@src/styles.js';

const Root = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 20px;
  border: 3px solid #FFF;
  
  ${isDesktopSmall} {
    padding: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Focus = ({ children, ...props }) => {
  return (
    <Root {...props}>
      {children}
    </Root>
  );
}

export default Focus;
