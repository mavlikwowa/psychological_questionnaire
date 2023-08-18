import styled from 'styled-components';
import { isDesktopSmall } from '@src/styles.js';

const Root = styled.ol`
  list-style-type: none;
  counter-reset: item;

  li {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  li::before {
    content: counter(item) ".";
    counter-increment: item;
    color: #979797;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 10px;
  }
  
  ${isDesktopSmall} {
    display: flex;
    padding: 0;
    
    li {
      margin-right: 20px;
    }

    li::before {
      font-size: 32px;
      margin-right: 20px;
    }
  }
`;

const ListItems = ({ children, ...props }) => {
  return (
    <Root {...props}>
      {children}
    </Root>
  );
}

export default ListItems;
