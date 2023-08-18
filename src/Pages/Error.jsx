import styled from 'styled-components';
import { Header } from '@ui';

const StyledHeader = styled(Header)`
  color: red;
  margin-top: 30%;
  text-align: center;
  width: 100%;
`;

const Error = () => {
    return (
      <StyledHeader>Вы проходили тест, либо идентификатор пользователя не найден.<br/>Обратитесь к администратору</StyledHeader>
    );
};

export default Error;
