import styled from 'styled-components';
import { isDesktopSmall } from '@src/styles.js';

const Root = styled.h3`
  color: black;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  ${isDesktopSmall} {
    font-size: 24px;  
  }
`

const Header = ({ children, ...props }) => {
  return (
    <Root {...props}>
      {children}
    </Root>
  );
}

export default Header;
