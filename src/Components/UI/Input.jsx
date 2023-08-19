import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  background: #FFF;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.10);
  height: 49px;
  padding: 10px 20px;
  width: 100%;

  &::placeholder {
    color: #A5A5A5;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Input = ({ labelComponent: Label, ...props }) => {
  return (
    <Root>
      {Label && <Label />}
      <StyledInput {...props} />
    </Root>
  );
}

export default Input;
