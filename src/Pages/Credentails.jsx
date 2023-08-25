import { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { MainContext } from '@src/Providers/MainProvider';
import GreetingRow from '@src/Components/GreetingRow';
import Focus from '@src/Components/Focus';
import { Input, Button } from '@ui';
import { isDesktopSmall } from '@src/styles.js';
import { ArrowIcon } from '@images';
import CONFIG from '../config.jsx';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  
  .slider {
    margin-top: 20px;
  }
`;

const Label = styled.h3`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 5px;
  
  ${isDesktopSmall} {
    font-size: 24px;
  }
`;

const StyledFocus = styled(Focus)`
  gap: 20px;
`

const StyledButton = styled(Button)`
  width: 160px;
  align-self: flex-end;
  margin-top: 20px;
  
  ${isDesktopSmall} {
    width: 126px;
    height: 35px;
    margin-top: 0;
  }
`;

const Credentails = () => {
  const { formData, setFormData, currentPage, goToNextPage } = useContext(MainContext);

  const isDesktop = useMediaQuery({
    query: `(min-width: 940px)`,
  });

  const onChange = (e, field) => {
    setFormData({ ...formData, [currentPage]: { ...formData[currentPage], [field]: e?.target?.value }})
  };

  const inputLabel = (text) => <Label>{text}</Label>

  return (
    <Root>
      <GreetingRow>{
        isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>
      }</GreetingRow>
      <StyledFocus>
        <Input
          labelComponent={() => inputLabel('Ваше имя:')}
          placeholder="Иван" value={formData[currentPage].name ?? ''}
          onChange={(e) => onChange(e, 'name')}
        />
        <Input
          type="number"
          labelComponent={() => inputLabel('Ваш возраст:')}
          placeholder="35 лет" value={formData[currentPage].age ?? ''}
          onChange={(e) => onChange(e, 'age')}
        />
        <Input
          labelComponent={() => inputLabel('Ник в телеграм')}
          placeholder="@" value={formData[currentPage].telegram ?? ''}
          onChange={(e) => onChange(e, 'telegram')}
        />
      </StyledFocus>

      {!isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>}
    </Root>
  );
}

export default Credentails;
