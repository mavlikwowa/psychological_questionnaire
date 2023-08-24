import styled from 'styled-components';
import { CloseIcon } from '@images';
import { isDesktopSmall } from '@src/styles';
import { useMediaQuery } from 'react-responsive';


const Root = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  padding: 20px;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  
  svg {
    cursor: pointer;
  }
  
  ${isDesktopSmall} {
    position: relative;
    max-width: 320px;
    width: auto;
    height: auto;
    top: -40px;
    min-height: auto;
  }
`;

const Header = styled.header`
  width: 100%;
  color: black;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  gap: 10px;
  color: black;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #DEDEDE;
  background: #FFF;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.10);
`;

const FakeInput = styled.div`
  display: flex;
  width: 80px;
  height: 95px;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #000;

  ${isDesktopSmall} {
    width: auto;
  }
`;

const Text = styled.p`
  color: black;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`;

const Tag = styled.div`
  display: flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #000;
`;

const Row = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Example = ({ onCloseClick = null }) => {
  const isDesktop = useMediaQuery({
    query: `(min-width: 940px)`,
  });

  return (
    <Root>
      {isDesktop && (
        <Header>
          Пример
        </Header>
      )}
      {!isDesktop && (
        <Header>
          Пример:
          <CloseIcon onClick={onCloseClick} />
        </Header>
      )}
      <Card>
        <Text>Для Вас важна хорошо оплачиваемая работа, даже если Вы не получаете должного признания.</Text>
        <FakeInput>3</FakeInput>
      </Card>
      <Card>
        <Text>Для Вас важны признание и похвала, даже если оплата не очень высока.</Text>
        <FakeInput>2</FakeInput>
      </Card>
      <Text>
        В указанном выше примере с первым утверждением я согласен чуть больше, чем со вторым.{' '}
        Но и второе убеждение для меня приемлемо. Поэтому первому убеждению я дал больше баллов, чем второму.{' '}
      </Text>
      <Text>
        Возможные варианты распределение баллов:
      </Text>
      <Row>
        <Tag>5–0</Tag>
        <Tag>4–1</Tag>
        <Tag>3–2</Tag>
        <Tag>2–3</Tag>
        <Tag>1–4</Tag>
        <Tag>0–5</Tag>
      </Row>
      <Text>
        При оценке используйте только целые числа. Ответы на вопросы давайте быстро и спонтанно, учитывая только собственное мнение.
      </Text>
    </Root>
  );
};

export default Example;
