import { useContext } from 'react';
import styled from 'styled-components';

import Focus from '@src/Components/Focus';
import { Button, Input, Textarea } from '@ui';
import { MainContext } from '@src/Providers/MainProvider';
import GreetingRow from '@src/Components/GreetingRow';
import { ArrowIcon } from '@images';
import { isDesktopSmall } from '@src/styles';
import { useMediaQuery } from 'react-responsive';

const Root = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;

const StyledFocus = styled(Focus)`
  display: flex;
  flex-direction: column;
`;

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

const Question = styled.h3`
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  margin-bottom: 10px;
`;

const Row = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  ${isDesktopSmall} {
    gap: 20px;
    flex-direction: row;
  }
`;

const SecondPage = () => {
  const { formData, setFormData, goToNextPage, currentPage } = useContext(MainContext);

  const onChange = (e, field) => {
    setFormData({ ...formData, [currentPage]: { ...formData[currentPage], [field]: e?.target?.value }})
  };

  const isDesktop = useMediaQuery({
    query: `(min-width: 940px)`,
  });

  return (
    <Root>
      <GreetingRow>{
        isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>
      }</GreetingRow>
      <StyledFocus>
        <Question>Какие три вопроса вы хотите решить с помощью сервиса?</Question>
        <Textarea onChange={(e) => onChange(e, 'threeQuestions')} placeholder="Ваш ответ" />
      </StyledFocus>
      <StyledFocus>
        <Question>Укажите ваши главные роли в жизни на сегодняшний день (муж, жена, родитель, директор и т. д.):</Question>
        <Row>
          <Input onChange={(e) => onChange(e, 'role1')} />
          <Input onChange={(e) => onChange(e, 'role2')} />
          <Input onChange={(e) => onChange(e, 'role3')} />
        </Row>
      </StyledFocus>
      <StyledFocus>
        <Question>Что для вас самое главное в жизни? Напишите три жизненные цели:</Question>
        <Row>
          <Textarea
            onChange={(e) => onChange(e, 'target1')}
            placeholder="Повысить уверенность в наличии у себя актуальных навыков, научиться емко их формулировать для потенциального работодателя"
          />
          <Textarea onChange={(e) => onChange(e, 'target2')} placeholder="Быть счатливым" />
          <Textarea onChange={(e) => onChange(e, 'target3')} placeholder="Переехать в другую страну" />
        </Row>
      </StyledFocus>
      {!isDesktop && <StyledButton onClick={goToNextPage}>Далее<ArrowIcon /></StyledButton>}
    </Root>
  );
}

export default SecondPage;
