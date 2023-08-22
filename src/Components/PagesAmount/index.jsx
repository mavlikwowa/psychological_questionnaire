import { useContext } from 'react';
import styled from 'styled-components';
import { isDesktopSmall } from '@src/styles.js';
import { PagesIcon } from '@images';
import { MainContext } from '@src/Providers/MainProvider';
import CONFIG from '@src/config.jsx';

const Root = styled.div`
  width: 90px;
  height: 30px;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #5A5A5A;
  border-radius: 5px;
  border: 1px solid #5A5A5A;
  font-size: 14.5px;
  
  ${isDesktopSmall} {
    width: 110px;
    height: 35px;
    padding: 5px 10px;
    gap: 10px;
    font-size: 18px;
  }
`;

const PagesAmount = () => {
  const { currentPage } = useContext(MainContext);
  const allPages = Math.max(...Object.keys(CONFIG.pages));
  return (
    <Root>
      <PagesIcon />
      {currentPage} из {allPages}
    </Root>
  );
}

export default PagesAmount;
