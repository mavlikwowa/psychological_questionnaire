import styled from 'styled-components';
import { Header } from '@ui';

const StyledHeader = styled(Header)`
  color: black;
  margin-top: 20%;
  text-align: center;
  width: 100%;
`;

const Error = () => {
    return (
      <StyledHeader>Упс. Вы уже проходили тест :)<br/>Если что-то пошло не так, обратитесь к менеджеру. Он поможет!</StyledHeader>
    );
};

export default Error;
