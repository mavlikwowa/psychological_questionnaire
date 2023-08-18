import { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
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

const StyledInfo = styled.span`
  width: 100%;
  text-align: center;
  color: ${({ $isError }) => $isError ? 'red' : 'green'};
  font-size: 24px;
  margin-top: 20px;
`;

const Credentails = () => {
  const { formData, setFormData } = useContext(MainContext);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const isDesktop = useMediaQuery({
    query: `(min-width: 940px)`,
  });

  const onChange = (e, field) => {
    setFormData({ ...formData, [field]: e?.target?.value })
  };

  const inputLabel = (text) => <Label>{text}</Label>

  const onClick = async () => {
    setInfo(null);
    const hasEmptyFields = Object.keys(formData).some(k => !formData[k])

    if (hasEmptyFields) {
      setInfo({ text: 'Заполните необходимые поля', isError: true });
      return;
    }

    let form = new FormData();
    Object.keys(formData).forEach(k => {
      form.append(CONFIG.mappingFields[k], formData[k]);
    })

    try {
      setLoading(true);
      const res = await fetch(CONFIG.scriptUrl, { method: 'POST', body: form})
      const data = await res.json();
      const isError = data?.result !== 'success'
      setInfo({ text: isError ? 'Ошибка записи данных' : 'Запись произведена', isError });
    } catch (e) {
      setInfo({ text: 'Ошибка записи данных', isError: true });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Root>
      <GreetingRow>{
        isDesktop && <StyledButton disabled={loading} onClick={onClick}>Далее<ArrowIcon /></StyledButton>
      }</GreetingRow>
      <StyledFocus>
        <Input
          labelComponent={() => inputLabel('Ваше имя:')}
          placeholder="Иван" value={formData.name ?? ''}
          onChange={(e) => onChange(e, 'name')}
        />
        <Input
          type="number"
          labelComponent={() => inputLabel('Ваш возраст:')}
          placeholder="35 лет" value={formData.age ?? ''}
          onChange={(e) => onChange(e, 'age')}
        />
        <Input
          labelComponent={() => inputLabel('Ник в телеграм')}
          placeholder="@" value={formData.telegram ?? ''}
          onChange={(e) => onChange(e, 'telegram')}
        />
      </StyledFocus>
      {info?.text && <StyledInfo $isError={info.isError}>{info.text}</StyledInfo>}
      {!isDesktop && <StyledButton disabled={loading} onClick={onClick}>Далее<ArrowIcon /></StyledButton>}
    </Root>
  );
}

export default Credentails;
